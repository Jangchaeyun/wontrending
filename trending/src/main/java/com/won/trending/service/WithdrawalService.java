package com.won.trending.service;

import com.won.trending.modal.User;
import com.won.trending.modal.Withdrawal;

import java.util.List;

public interface WithdrawalService {
    Withdrawal requestyWithdrawal(Long amount, User user);

    Withdrawal procedyWithdrawal(Long withdrawalId, boolean accept) throws Exception;

    List<Withdrawal> getUsersWithdrawalHistory(User user);

    List<Withdrawal> getAllWithdrawalRequest();
}
