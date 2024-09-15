package com.won.trending.modal;

import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class TwoFactorAuth {
    private boolean isEnabled = false;
    private VerificationType sendTo;
}
