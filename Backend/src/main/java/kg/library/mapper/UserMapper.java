package kg.library.mapper;

import kg.library.module.entity.User;
import kg.library.module.enums.UserRole;
import kg.library.wrapper.request.UserRegisterRequest;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public User toUserFromRegister (UserRegisterRequest userRegisterRequest){
        return User.builder()
                .firstName(userRegisterRequest.getFirstName())
                .lastName(userRegisterRequest.getLastName())
                .email(userRegisterRequest.getEmail())
                .password(userRegisterRequest.getPassword())
                .role(UserRole.USER)
                .status(false)
                .build();
    }
    public User toUserFromRegisterAdmin (UserRegisterRequest userRegisterRequest){
        return User.builder()
                .firstName(userRegisterRequest.getFirstName())
                .lastName(userRegisterRequest.getLastName())
                .email(userRegisterRequest.getEmail())
                .password(userRegisterRequest.getPassword())
                .role(UserRole.ADMIN)
                .status(false)
                .build();
    }
}
