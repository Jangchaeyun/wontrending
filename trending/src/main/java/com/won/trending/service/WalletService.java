package com.won.trending.service;

import com.won.trending.modal.Order;
import com.won.trending.modal.User;
import com.won.trending.modal.Wallet;

public interface WalletService {
    Wallet getUserWallet(User user);
    Wallet addBalanceToWallet(Wallet wallet, Long money);
    Wallet findWalletById(Long id) throws Exception;
    Wallet walletToWalletTransfer(User sender, Wallet receiverWallet, Long amount) throws Exception;
    Wallet payOrderPayment(Order order, User user) throws Exception;

}
