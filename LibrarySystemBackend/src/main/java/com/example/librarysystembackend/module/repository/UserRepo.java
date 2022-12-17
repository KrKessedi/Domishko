package com.example.librarysystembackend.module.repository;

import com.example.librarysystembackend.module.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    Optional <User> findUserByEmail(String email);
    User getUserByEmail(String email);
}
