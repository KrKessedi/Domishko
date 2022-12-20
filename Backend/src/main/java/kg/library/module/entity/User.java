package kg.library.module.entity;



import kg.library.module.entity.base.AbstractEntity;
import kg.library.module.enums.UserRole;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;


@Entity
@Table(name = "users")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User extends AbstractEntity {
    String firstName;
    String lastName;
    String email;
    String password;
    @Enumerated(EnumType.STRING)
    UserRole role;
    Boolean status;
}
