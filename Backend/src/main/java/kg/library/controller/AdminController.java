package kg.library.controller;


import kg.library.service.AdminService;
import kg.library.service.ResetPasswordService;
import kg.library.service.VerificationTokenService;
import kg.library.wrapper.request.LoginRequest;
import kg.library.wrapper.request.RequestResetPassword;
import kg.library.wrapper.request.UserRegisterRequest;
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
    @PostMapping(path = "confirm")
    public ResponseEntity<?> activateAccount(@RequestParam( "url") String url) {
        return ResponseEntity.ok(verificationTokenService.activateAccount(url));
    }
    @PostMapping("/reset/password")
    public ResponseEntity<?> sendEmailToResetPassword(@RequestParam String email) {
        return ResponseEntity.ok(resetPasswordService.sendEmailToResetPasswordForAdmin(email));
    }
    @PostMapping(path = "confirm/password{link}")
    public ResponseEntity<?> resetPassword(@PathVariable(name = "link") String link,
                                           @RequestBody RequestResetPassword requestResetPassword){

        return ResponseEntity.ok(resetPasswordService.resetPassword(link,requestResetPassword));
    }

}
