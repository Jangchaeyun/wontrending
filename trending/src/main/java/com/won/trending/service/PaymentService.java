package com.won.trending.service;

import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;
import com.won.trending.domain.PaymentMethod;
import com.won.trending.modal.PaymentOrder;
import com.won.trending.modal.User;
import com.won.trending.response.PaymentResponse;

public interface PaymentService {
    PaymentOrder createOrder(User user, Long amount, PaymentMethod paymentMethod);

    PaymentOrder getPaymentOrderById(Long id) throws Exception;

    Boolean ProccedPaymentOrder(PaymentOrder paymentOrder, String paymentId) throws RazorpayException, StripeException;

    PaymentResponse createStripePaymentLink(User user, Long amount, Long orderId) throws StripeException;
}
