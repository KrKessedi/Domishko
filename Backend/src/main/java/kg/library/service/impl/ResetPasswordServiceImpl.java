package kg.library.service.impl;

import kg.library.mapper.ResetPasswordMapper;
import kg.library.module.entity.ResetPassword;
import kg.library.module.entity.User;
import kg.library.module.repository.ResetPasswordRepo;
import kg.library.service.MailService;
import kg.library.service.ResetPasswordService;
import kg.library.service.UserService;
import kg.library.wrapper.request.RequestResetPassword;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URLEncoder;
import java.time.LocalDateTime;
import java.util.Random;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ResetPasswordServiceImpl implements ResetPasswordService {
    private final MailService mailService;
    private final UserService userService;

    private final ResetPasswordRepo resetPasswordRepo;
    private final ResetPasswordMapper resetPasswordMapper;

    @Override
    public ResponseEntity<?> sendEmailToResetPasswordForUser(String email) {
        User user = userService.findUserByEmail(email);
        String token = createToken(email);
        ResetPassword resetPassword = resetPasswordMapper.toResetPassword(user,token);
        resetPasswordRepo.save(resetPassword);
        mailService.sendMessage(email,"Reset password ",
                "Here is the link below to reset password. Link will expire after 30 minutes \n" +
                        "http://localhost:8080/user/confirm/password?=" + token);
        return ResponseEntity.ok("Check you mail box!");
    }

    @Override
    public ResponseEntity<?> sendEmailToResetPasswordForAdmin(String adminEmail) {
        User user = userService.findUserByEmail(adminEmail);
        String token = createToken(adminEmail);
        ResetPassword resetPassword = resetPasswordMapper.toResetPassword(user,token);
        resetPasswordRepo.save(resetPassword);
        mailService.sendMessage(adminEmail,"Reset password ",
                "Here is the link below to reset password. Link will expire after 30 minutes \n" +
                        "http://localhost:8080/admin/confirm/password?=" + token);
        return ResponseEntity.ok("Check you mail box!");
    }

    @Override
    public ResponseEntity<?> resetPassword(String link, RequestResetPassword requestResetPassword) {
        link =URLEncoder.encode(link);
        ResetPassword resetPassword = resetPasswordRepo.findResetPasswordByToken(link).orElseThrow(
                ()-> new RuntimeException("No such a link!"));
        if (isValid(resetPassword)){
            return ResponseEntity.badRequest().body("Link is expired!");
        }
        User user = resetPassword.getUser();
        checkPassword(requestResetPassword);
        user.setPassword(requestResetPassword.getConfirmedPassword());
        resetPasswordRepo.delete(resetPassword);
        mailService.sendMessage(user.getEmail(),
                "Password successfully changed!","Greeting! You password is updated");
        return ResponseEntity.ok("Password successfully updated!");
    }

    public boolean isValid(ResetPassword resetPassword){
        ResetPassword link = resetPassword;
        if (link.getGenerationTime().plusHours(2).isBefore(LocalDateTime.now())) {
            return false;
        }
        return true;
    }

    private void checkPassword(RequestResetPassword resetPassword) {
        String newPassword = resetPassword.getNewPassword();
        if (!newPassword.equals(resetPassword.getConfirmedPassword())){
            throw new RuntimeException("The password didn't match");
        }
    }

    private String createToken(String email) {
        String token = UUID.randomUUID().toString();
        String result =  token + email;
        return URLEncoder.encode(result);
    }
}
