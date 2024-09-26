package com.won.trending.service;

import com.won.trending.domain.OrderType;
import com.won.trending.modal.Coin;
import com.won.trending.modal.Order;
import com.won.trending.modal.OrderItem;
import com.won.trending.modal.User;

import java.util.List;

public interface OrderService {
    Order createOrder(User user, OrderItem orderItem, OrderType orderType);

    Order getOrderById(Long orderId) throws Exception;

    List<Order> getAllOrdersOfUser(Long userId, String orderType, String assetSymbol);

    Order processOrder(Coin coin, double quantity, OrderType orderType, User user) throws Exception;
}
