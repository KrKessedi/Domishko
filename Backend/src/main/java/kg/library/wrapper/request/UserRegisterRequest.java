package kg.library.wrapper.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRegisterRequest {
    String firstName;
    String lastName;
    String password;
    String email;
}
