package com.example.librarysystembackend.module.entity;

import com.example.librarysystembackend.module.entity.base.AbstractEntity;
import com.example.librarysystembackend.module.enums.UserRole;
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
