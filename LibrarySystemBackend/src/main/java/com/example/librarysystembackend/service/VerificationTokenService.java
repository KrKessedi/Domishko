package com.example.librarysystembackend.service;

import com.example.librarysystembackend.wrapper.request.UserRegisterRequest;
import org.springframework.http.ResponseEntity;

public interface VerificationTokenService {
    public ResponseEntity<?> register(UserRegisterRequest userRegisterRequest);

    public ResponseEntity<?> activateAccount(String link);
}
