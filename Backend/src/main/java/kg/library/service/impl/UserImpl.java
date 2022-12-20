package kg.library.service.impl;


import kg.library.mapper.UserMapper;
import kg.library.module.entity.User;
import kg.library.module.enums.UserRole;
import kg.library.module.repository.UserRepo;
import kg.library.service.MailService;
import kg.library.service.UserService;
import kg.library.wrapper.request.LoginRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserImpl implements UserService {
    private final UserRepo userRepo;
    private final UserMapper userMapper;
    private final MailService mailService;
    @Override
    public User login(LoginRequest loginRequest) {
        User user = findUserByEmail(loginRequest.getEmail());
        if (!user.getPassword().equals(loginRequest.getPassword())){
            throw new RuntimeException("Password is incorrect!");
        } else if (user.getRole().equals(UserRole.ADMIN)) {
            throw new RuntimeException("To login allows for only user!");
        }
        return user;
    }

    @Override
    public User findUserByEmail(String email) {
        return  userRepo.findUserByEmail(email).orElseThrow(()->
                new RuntimeException("No such a user exists!"));
    }
    public User getUserByEmail(String email){
        return userRepo.getUserByEmail(email);
    }

    @Override
    public void save(User user) {
        userRepo.save(user);
    }
}
