package com.example.librarysystembackend.mapper;

import com.example.librarysystembackend.module.entity.ResetPassword;
import com.example.librarysystembackend.module.entity.User;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Date;

@Component
public class ResetPasswordMapper {

    public ResetPassword toResetPassword (User user, String url){
        return ResetPassword.builder()
                .user(user)
                .token(url)
                .generationTime(LocalDateTime.now())
                .build();
    }
}
