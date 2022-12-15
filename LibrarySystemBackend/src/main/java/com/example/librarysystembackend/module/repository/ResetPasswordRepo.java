package com.example.librarysystembackend.module.repository;

import com.example.librarysystembackend.module.entity.ResetPassword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ResetPasswordRepo extends JpaRepository<ResetPassword, Long> {
    Optional<ResetPassword> findResetPasswordByToken(String token);
}
