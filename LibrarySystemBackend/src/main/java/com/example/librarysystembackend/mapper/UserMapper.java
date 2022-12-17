package com.example.librarysystembackend.mapper;

import com.example.librarysystembackend.module.entity.User;
import com.example.librarysystembackend.module.enums.UserRole;
import com.example.librarysystembackend.wrapper.request.UserRegisterRequest;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public User toUserFromRegister (UserRegisterRequest userRegisterRequest){
        return User.builder()
                .firstName(userRegisterRequest.getFirstName())
                .lastName(userRegisterRequest.getLastName())
                .email(userRegisterRequest.getEmail())
                .password(userRegisterRequest.getPassword())
                .role(UserRole.USER)
                .status(false)
                .build();
    }
    public User toUserFromRegisterAdmin (UserRegisterRequest userRegisterRequest){
        return User.builder()
                .firstName(userRegisterRequest.getFirstName())
                .lastName(userRegisterRequest.getLastName())
                .email(userRegisterRequest.getEmail())
                .password(userRegisterRequest.getPassword())
                .role(UserRole.ADMIN)
                .status(false)
                .build();
    }
}
