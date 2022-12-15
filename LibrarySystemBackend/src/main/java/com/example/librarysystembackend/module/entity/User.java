package com.example.librarysystembackend.module.entity;

import com.example.librarysystembackend.module.entity.base.AbstractEntity;
import com.example.librarysystembackend.module.enums.UserRole;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Table(name = "users")
@Getter
@Setter
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
}
