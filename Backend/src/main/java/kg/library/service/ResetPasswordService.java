package kg.library.service;

import kg.library.wrapper.request.RequestResetPassword;
import org.springframework.http.ResponseEntity;

public interface ResetPasswordService {
    ResponseEntity<?> sendEmailToResetPasswordForUser(String email);

    ResponseEntity<?> sendEmailToResetPasswordForAdmin(String adminEmail);

    ResponseEntity<?> resetPassword(String link, RequestResetPassword requestResetPassword);
}
