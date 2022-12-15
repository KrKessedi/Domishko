package com.example.librarysystembackend.service.impl;

import com.example.librarysystembackend.module.entity.User;
import com.example.librarysystembackend.module.repository.UserRepo;
import com.example.librarysystembackend.service.UserService;
import com.example.librarysystembackend.wrapper.request.LoginRequest;
import com.example.librarysystembackend.wrapper.request.UserRegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserImpl implements UserService {
    private final UserRepo userRepo;
    @Override
    public User login(LoginRequest loginRequest) {
        User user = findUserByEmail(loginRequest.getEmail());
        if (!user.getPassword().equals(loginRequest.getPassword())){
            throw new RuntimeException("Password is incorrect!");
        }
        return user;
    }

    @Override
    public User registerUser(UserRegisterRequest userRegisterRequest) {
        return null;
    }

    @Override
    public User findUserByEmail(String email) {
        return  userRepo.findUserByEmail(email).orElseThrow(()->
                new RuntimeException("No such a user exists!"));
    }


}
