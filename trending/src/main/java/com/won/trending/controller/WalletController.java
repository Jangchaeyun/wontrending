package com.won.trending.controller;

import com.won.trending.domain.WalletTransactionType;
import com.won.trending.modal.*;
import com.won.trending.response.PaymentResponse;
import com.won.trending.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
public class WalletController {
    @Autowired
    private WalletService walletService;

    @Autowired
    private UserService userService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private TransactionService transactionService;

    @GetMapping("/api/wallet")
    public ResponseEntity<Wallet> getUserWallet(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

        Wallet wallet = walletService.getUserWallet(user);

        return new ResponseEntity<>(wallet, HttpStatus.ACCEPTED);
    }

    @PutMapping("/api/wallet/{walletId}/transfer")
    public ResponseEntity<Wallet> walletToWalletTransfer(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long walletId,
            @RequestBody WalletTransaction req
    ) throws Exception {
        User senderUser = userService.findUserProfileByJwt(jwt);
        Wallet receiverWallet = walletService.findWalletById(walletId);
        Wallet wallet = walletService.walletToWalletTransfer(
                senderUser, receiverWallet,
                req.getAmount());

        transactionService.createTransaction(
                wallet,
                WalletTransactionType.WALLET_TRANSFER,
                receiverWallet.getId(),
                req.getPurpose(),
                req.getAmount()
        );

        return new ResponseEntity<>(wallet, HttpStatus.ACCEPTED);
    }

   @PutMapping("/api/wallet/order/{orderId}/pay")
    public ResponseEntity<Wallet> payOrderPayment(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long orderId
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

       Order order = orderService.getOrderById(orderId);

       Wallet wallet = walletService.payOrderPayment(order, user);

        return new ResponseEntity<>(wallet, HttpStatus.ACCEPTED);
    }

    @PutMapping("/api/wallet/deposit")
    public ResponseEntity<Wallet> addBalanceToWallet(
            @RequestHeader("Authorization") String jwt,
            @RequestParam(name="order_id") Long orderId
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

        Wallet wallet = walletService.getUserWallet(user);

        PaymentOrder order = paymentService.getPaymentOrderById(orderId);

        if (wallet.getBalance() == null) {
            wallet.setBalance(BigDecimal.valueOf(0));
        }
        wallet = walletService.addBalance(wallet, order.getAmount());

        return new ResponseEntity<>(wallet, HttpStatus.ACCEPTED);
    }
}
