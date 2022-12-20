package kg.library.module.entity;



import kg.library.module.entity.base.AbstractEntity;
import lombok.*;
import lombok.experimental.FieldDefaults;


import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "reset_passwords")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ResetPassword extends AbstractEntity {
    @ManyToOne
    User user;
    String token;
    LocalDateTime generationTime;
}
