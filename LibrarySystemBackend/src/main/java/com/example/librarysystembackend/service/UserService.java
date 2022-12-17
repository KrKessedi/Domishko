package com.example.librarysystembackend.service;

import com.example.librarysystembackend.module.entity.User;
import com.example.librarysystembackend.wrapper.request.LoginRequest;
import com.example.librarysystembackend.wrapper.request.UserRegisterRequest;

public interface UserService {
    User login(LoginRequest loginRequest);

    User findUserByEmail(String email);
    User getUserByEmail(String email);

    void save(User user);
}

