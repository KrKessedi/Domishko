package kg.library.service.impl;


import kg.library.mapper.UserMapper;
import kg.library.mapper.VerificationTokenMapper;
import kg.library.module.entity.User;
import kg.library.module.entity.VerificationToken;
import kg.library.module.repository.VerificationTokenRepo;
import kg.library.service.MailService;
import kg.library.service.UserService;
import kg.library.service.VerificationTokenService;
import kg.library.wrapper.request.UserRegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URLEncoder;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class VerificationTokenServiceImpl implements VerificationTokenService {
    private final VerificationTokenRepo verificationTokenRepo;
    private final MailService mailService;
    private final UserMapper userMapper;
    private final UserService userService;
    private final VerificationTokenMapper tokenMapper;

    @Override
    public ResponseEntity<?> register(UserRegisterRequest userRegisterRequest) {
        User user = userService.getUserByEmail(userRegisterRequest.getEmail());
        if (user!=null){
            throw new RuntimeException("This email address already registered!");
        }
        user = userMapper.toUserFromRegister(userRegisterRequest);
        userService.save(user);
        String url = createToken(userRegisterRequest);
        VerificationToken tokenVerifier = tokenMapper.toVerificationToken(user,url);
        verificationTokenRepo.save(tokenVerifier);
        mailService.sendMessage(userRegisterRequest.getEmail(),"Verification of email",
                "Here is the link to activate your account. Link will expire after 30 minutes \n" +
                "http://localhost:8080/user/confirm?url=" +url);
        return ResponseEntity.ok("Message sent to activate your account");
    }

    @Override
    public ResponseEntity<?> activateAccount(String link) {
        link = URLEncoder.encode(link);
        VerificationToken verificationToken = verificationTokenRepo.findVerificationTokenByToken(link)
                .orElseThrow(()-> new RuntimeException("Token does not exist!"));
        if (isValidLink(verificationToken)){
            System.out.println("Token is expired!");
        }
        User user = verificationToken.getUser();
        user.setStatus(true);
        userService.save(user);
        verificationTokenRepo.delete(verificationToken);
        return ResponseEntity.ok("You account successfully activated");
    }

    protected String createToken(UserRegisterRequest userRegisterRequest){
        String token = UUID.randomUUID().toString();
        String result =  token + userRegisterRequest.getEmail();
        return URLEncoder.encode(result);
    }
    protected boolean isValidLink(VerificationToken link){
        if (link.getGenerationTime().plusHours(2).isBefore(LocalDateTime.now())) {
            return false;
        }
        return true;
    }
}
