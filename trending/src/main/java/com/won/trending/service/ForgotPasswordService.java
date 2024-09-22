package com.won.trending.service;

import com.won.trending.domain.VerificationType;
import com.won.trending.modal.ForgotPasswordToken;
import com.won.trending.modal.User;

public interface ForgotPasswordService {
    ForgotPasswordToken createToken(User user,
                                    String id,
                                    String otp,
                                    VerificationType verificationType,
                                    String sendTo);

    ForgotPasswordToken findById(String id);

    ForgotPasswordToken findByUser(Long userId);

    void deleteToken(ForgotPasswordToken token);
}
