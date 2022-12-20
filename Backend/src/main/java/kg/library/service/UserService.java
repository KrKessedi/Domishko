package kg.library.service;


import kg.library.module.entity.User;
import kg.library.wrapper.request.LoginRequest;

public interface UserService {
    User login(LoginRequest loginRequest);

    User findUserByEmail(String email);
    User getUserByEmail(String email);

    void save(User user);
}

