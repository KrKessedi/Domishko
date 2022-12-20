package kg.library.module.entity;

import kg.library.module.entity.base.AbstractEntity;
import lombok.*;
import lombok.experimental.FieldDefaults;


import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "verification_tokens")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class VerificationToken extends AbstractEntity {
    String token;
    LocalDateTime generationTime;
    @ManyToOne
    User user;

}
