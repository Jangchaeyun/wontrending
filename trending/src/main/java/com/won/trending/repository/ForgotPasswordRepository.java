package com.won.trending.repository;

import com.won.trending.modal.ForgotPasswordToken;
import com.won.trending.service.ForgotPasswordService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ForgotPasswordRepository extends JpaRepository<ForgotPasswordToken, String> {
    ForgotPasswordToken findByUserId(Long userId);
}
