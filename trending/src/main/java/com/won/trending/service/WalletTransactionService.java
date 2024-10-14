package com.won.trending.service;

import com.won.trending.domain.WalletTransactionType;
import com.won.trending.modal.Wallet;
import com.won.trending.modal.WalletTransaction;

public interface WalletTransactionService {
    WalletTransaction createTransaction(Wallet wallet, WalletTransactionType type, Long transfer, String purpose, Long amount);
}
