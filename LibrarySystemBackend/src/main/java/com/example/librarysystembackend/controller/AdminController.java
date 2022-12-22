package com.example.librarysystembackend.controller;

import com.example.librarysystembackend.service.AdminService;
import com.example.librarysystembackend.service.ResetPasswordService;
import com.example.librarysystembackend.service.VerificationTokenService;
import com.example.librarysystembackend.wrapper.request.LoginRequest;
import com.example.librarysystembackend.wrapper.request.RequestResetPassword;
import com.example.librarysystembackend.wrapper.request.UserRegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {
    private final AdminService adminService;
    private final VerificationTokenService verificationTokenService;
    private final ResetPasswordService resetPasswordService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(adminService.loginAdmin(loginRequest));
    }
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRegisterRequest userRegisterRequest) {
        return ResponseEntity.ok(verificationTokenService.register(userRegisterRequest));
    }
    @PostMapping("/activate/account{url}")
    public ResponseEntity<?> activateAccount(@PathVariable(name = "url") String url) {
        return ResponseEntity.ok(verificationTokenService.activateAccount(url));
    }
    @PostMapping("/reset/password")
    public ResponseEntity<?> sendEmailToResetPassword(String email) {
        return ResponseEntity.ok(resetPasswordService.sendEmailToResetPassword(email));
    }
    @PostMapping("/reset/password/{link}")
    public ResponseEntity<?> resetPassword(@PathVariable(name = "link") String link,
                                           @RequestBody RequestResetPassword requestResetPassword){

        return ResponseEntity.ok(resetPasswordService.resetPassword(link,requestResetPassword));
    }

}
