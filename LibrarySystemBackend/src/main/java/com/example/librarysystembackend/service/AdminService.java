package com.example.librarysystembackend.service;

import com.example.librarysystembackend.wrapper.request.LoginRequest;
import com.example.librarysystembackend.wrapper.request.UserRegisterRequest;
import org.springframework.http.ResponseEntity;

public interface AdminService {
    ResponseEntity<?> loginAdmin(LoginRequest loginRequest);
    ResponseEntity<?> registerAdmin(UserRegisterRequest userRegisterRequest);
}
