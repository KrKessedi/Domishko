package kg.library.service;

import kg.library.wrapper.request.UserRegisterRequest;
import org.springframework.http.ResponseEntity;

public interface VerificationTokenService {
    public ResponseEntity<?> register(UserRegisterRequest userRegisterRequest);

    public ResponseEntity<?> activateAccount(String link);
}
