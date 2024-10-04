package com.won.trending.service;

import com.won.trending.domain.WalletTransactionType;
import com.won.trending.modal.Wallet;
import com.won.trending.modal.WalletTransaction;
import com.won.trending.repository.WalletTransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class WalletTransactionServiceImpl implements WalletTransactionService{

    @Autowired
    private WalletTransactionRepository walletTransactionRepository;

    @Override
    public WalletTransaction createTransaction(Wallet wallet, WalletTransactionType type, String transfer, String purpose, Long amount) {
        WalletTransaction walletTransaction = new WalletTransaction();
        walletTransaction.setWallet(wallet);
        walletTransaction.setType(type);
        walletTransaction.setTransferId(transfer);
        walletTransaction.setPurpose(purpose);
        walletTransaction.setAmount(amount);
        walletTransaction.setDate(LocalDate.now());

        return walletTransactionRepository.save(walletTransaction);
    }
}
