package com.example.librarysystembackend.service.impl;

import com.example.librarysystembackend.mapper.UserMapper;
import com.example.librarysystembackend.mapper.VerificationTokenMapper;
import com.example.librarysystembackend.module.entity.User;
import com.example.librarysystembackend.module.entity.VerificationToken;
import com.example.librarysystembackend.module.enums.UserRole;
import com.example.librarysystembackend.module.repository.VerificationTokenRepo;
import com.example.librarysystembackend.service.AdminService;
import com.example.librarysystembackend.service.MailService;
import com.example.librarysystembackend.service.UserService;
import com.example.librarysystembackend.wrapper.request.LoginRequest;
import com.example.librarysystembackend.wrapper.request.UserRegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URLEncoder;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService  {
    private final UserService userService;
    private final VerificationTokenRepo verificationTokenRepo;
    private final MailService mailService;
    private final UserMapper userMapper;
    private final VerificationTokenMapper tokenMapper;

    @Override
    public ResponseEntity<?> registerAdmin(UserRegisterRequest userRegisterRequest) {
        User user = userService.getUserByEmail(userRegisterRequest.getEmail());
        if (user!=null){
            throw new RuntimeException("This email address already registered!");
        }
        user = userMapper.toUserFromRegisterAdmin(userRegisterRequest);
        userService.save(user);
        String token = createToken(userRegisterRequest);
        VerificationToken tokenVerifier = tokenMapper.toVerificationToken(user,token);
        verificationTokenRepo.save(tokenVerifier);
        mailService.sendMessage(userRegisterRequest.getEmail(),"Verification of email",
                "Here is the link to activate your account. Link will expire after 2 hours \n" +
                        "http://localhost:8080/activatation/account/" + token);
        return ResponseEntity.ok("Message sent to activate your account");
    }

    @Override
    public ResponseEntity<?> loginAdmin(LoginRequest loginRequest) {
        User user = userService.getUserByEmail(loginRequest.getEmail());
        if (!user.getPassword().equals(loginRequest.getPassword())){
            throw new RuntimeException("Password is incorrect!");
        } else if (user.getRole().equals(UserRole.USER)) {
            throw new RuntimeException("To login allows for only admin!");
        }
        return ResponseEntity.ok(user);
    }
    protected String createToken(UserRegisterRequest userRegisterRequest){
        String token = UUID.randomUUID().toString();
        String result =  token + userRegisterRequest.getEmail();
        return URLEncoder.encode(result);
    }
}

