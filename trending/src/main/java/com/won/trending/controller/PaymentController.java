package com.won.trending.controller;

import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;
import com.won.trending.domain.PaymentMethod;
import com.won.trending.modal.PaymentOrder;
import com.won.trending.modal.User;
import com.won.trending.response.PaymentResponse;
import com.won.trending.service.PaymentService;
import com.won.trending.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class PaymentController {
    @Autowired
    private UserService userService;

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/api/payment/{paymentMethod}/amount/{amount}")
    public ResponseEntity<PaymentResponse> paymentHandler(
            @PathVariable PaymentMethod paymentMethod,
            @PathVariable Long amount,
            @RequestHeader("Authorization") String jwt
            ) throws Exception, RazorpayException, StripeException {
        User user = userService.findUserProfileByJwt(jwt);
        PaymentResponse paymentResponse = null;

        PaymentOrder order = paymentService.createOrder(user, amount, paymentMethod);

        if (paymentMethod.equals(PaymentMethod.STRIPE)) {
            paymentResponse = paymentService.createStripePaymentLink(user, amount, order.getId());
        }

        return new ResponseEntity<>(paymentResponse, HttpStatus.CREATED);
    }
}
