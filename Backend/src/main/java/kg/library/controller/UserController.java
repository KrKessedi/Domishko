package kg.library.controller;


import kg.library.service.ResetPasswordService;
import kg.library.service.UserService;
import kg.library.service.VerificationTokenService;
import kg.library.wrapper.request.LoginRequest;
import kg.library.wrapper.request.RequestResetPassword;
import kg.library.wrapper.request.UserRegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    private final ResetPasswordService resetPasswordService;
    private final VerificationTokenService verificationTokenService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(userService.login(loginRequest));
    }
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRegisterRequest userRegisterRequest) {
        return ResponseEntity.ok(verificationTokenService.register(userRegisterRequest));
    }
    @GetMapping(path = "confirm")
    public ResponseEntity<?> activateAccount(@RequestParam("url") String url) {
        return ResponseEntity.ok(verificationTokenService.activateAccount(url));
    }
    @PostMapping("/reset/password")
    public ResponseEntity<?> sendEmailToResetPassword(@RequestParam String email) {
        return ResponseEntity.ok(resetPasswordService.sendEmailToResetPasswordForUser(email));
    }
    @RequestMapping(path = "confirm/password{link}")
    public ResponseEntity<?> resetPassword(@PathVariable (name = "link") String link,
                                           @RequestBody RequestResetPassword requestResetPassword){

        return ResponseEntity.ok(resetPasswordService.resetPassword(link,requestResetPassword));
    }
}
