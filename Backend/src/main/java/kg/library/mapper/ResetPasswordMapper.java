package kg.library.mapper;

import kg.library.module.entity.ResetPassword;
import kg.library.module.entity.User;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;


@Component
public class ResetPasswordMapper {

    public ResetPassword toResetPassword (User user, String url){
        return ResetPassword.builder()
                .user(user)
                .token(url)
                .generationTime(LocalDateTime.now())
                .build();
    }
}
