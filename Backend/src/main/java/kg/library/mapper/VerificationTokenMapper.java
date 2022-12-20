package kg.library.mapper;


import kg.library.module.entity.User;
import kg.library.module.entity.VerificationToken;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class VerificationTokenMapper {
    public VerificationToken toVerificationToken(User user, String token){
        return VerificationToken.builder()
                .user(user)
                .generationTime(LocalDateTime.now())
                .token(token)
                .build();
    }
}
