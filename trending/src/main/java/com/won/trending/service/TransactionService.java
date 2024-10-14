package com.won.trending.service;

import com.won.trending.domain.WalletTransactionType;
import com.won.trending.modal.Wallet;
import com.won.trending.modal.WalletTransaction;

import java.util.List;

public interface TransactionService {
    List<WalletTransaction> getTransactionsByWallet(Wallet wallet);

    void createTransaction(Wallet wallet, WalletTransactionType type, Long receiverWalletId, String purpose, Long amount);
}
