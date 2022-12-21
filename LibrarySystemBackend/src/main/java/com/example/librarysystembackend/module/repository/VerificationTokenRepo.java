package com.example.librarysystembackend.module.repository;

import com.example.librarysystembackend.module.entity.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VerificationTokenRepo extends JpaRepository<VerificationToken,Long> {
    Optional<VerificationToken> findVerificationTokenByToken(String token);
}
