package kg.library.service;

import kg.library.wrapper.request.LoginRequest;
import kg.library.wrapper.request.UserRegisterRequest;
import org.springframework.http.ResponseEntity;

public interface AdminService {
    ResponseEntity<?> loginAdmin(LoginRequest loginRequest);
    ResponseEntity<?> registerAdmin(UserRegisterRequest userRegisterRequest);
}
