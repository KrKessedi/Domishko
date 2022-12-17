package com.example.librarysystembackend.mapper;

import com.example.librarysystembackend.module.entity.User;
import com.example.librarysystembackend.module.entity.VerificationToken;
import com.example.librarysystembackend.wrapper.request.UserRegisterRequest;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class VerificationTokenMapper {
    public VerificationToken toVerificationToken(User user, String token){
        return VerificationToken.builder()
                .user(user)
                .generationTime(LocalDateTime.now())
                .token(token)
                .build();
    }
}
