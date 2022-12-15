package com.example.librarysystembackend.module.entity;

import com.example.librarysystembackend.module.entity.base.AbstractEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ResetPassword extends AbstractEntity {
    @ManyToOne
    User user;
    String token;
    LocalDateTime generationTime;
}
