package com.example.librarysystembackend.service.impl;

import com.example.librarysystembackend.mapper.UserMapper;
import com.example.librarysystembackend.module.entity.User;
import com.example.librarysystembackend.module.enums.UserRole;
import com.example.librarysystembackend.module.repository.UserRepo;
import com.example.librarysystembackend.service.MailService;
import com.example.librarysystembackend.service.UserService;
import com.example.librarysystembackend.wrapper.request.LoginRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserImpl implements UserService {
    private final UserRepo userRepo;
    private final UserMapper userMapper;
    private final MailService mailService;
    @Override
    public User login(LoginRequest loginRequest) {
        User user = findUserByEmail(loginRequest.getEmail());
        if (!user.getPassword().equals(loginRequest.getPassword())){
            throw new RuntimeException("Password is incorrect!");
        } else if (user.getRole().equals(UserRole.ADMIN)) {
            throw new RuntimeException("To login allows for only user!");
        }
        return user;
    }

    @Override
    public User findUserByEmail(String email) {
        return  userRepo.findUserByEmail(email).orElseThrow(()->
                new RuntimeException("No such a user exists!"));
    }
    public User getUserByEmail(String email){
        return userRepo.getUserByEmail(email);
    }

    @Override
    public void save(User user) {
        userRepo.save(user);
    }
}
