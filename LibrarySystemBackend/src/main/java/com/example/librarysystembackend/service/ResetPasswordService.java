package com.example.librarysystembackend.service;

import com.example.librarysystembackend.wrapper.request.RequestResetPassword;
import org.springframework.http.ResponseEntity;

public interface ResetPasswordService {
    ResponseEntity<?> sendEmailToResetPassword(String email);

    ResponseEntity<?> resetPassword(String link, RequestResetPassword requestResetPassword);
}
