//package com.agriconnect.backend.service;
//
//import com.agriconnect.backend.model.Order;
//import com.agriconnect.backend.repository.OrderRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class OrderService {
//
//    @Autowired
//    private OrderRepository orderRepository;
//
//    // Get all orders
//    public List<Order> getAllOrders() {
//        return orderRepository.findAll();
//    }
//
//    // Get an order by ID
//    public Optional<Order> getOrderById(Long id) {
//        return orderRepository.findById(id);
//    }
//
//    // Mark an order as completed
//    public boolean markOrderAsCompleted(Long id) {
//        Optional<Order> orderOpt = orderRepository.findById(id);
//        if (orderOpt.isPresent()) {
//            Order order = orderOpt.get();
//            order.setStatus("Completed");
//            orderRepository.save(order);
//            return true;
//        }
//        return false;
//    }
//
//    // Create a new order
//    public Order createOrder(Order order) {
//        return orderRepository.save(order);
//    }
//
//
//}
//




package com.agriconnect.backend.service;

import com.agriconnect.backend.model.Order;
import com.agriconnect.backend.model.User;
import com.agriconnect.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    // Get all orders
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Get an order by ID
    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    // Mark an order as completed and return the updated order
    public Order markOrderAsCompleted(Long id) {
        Optional<Order> orderOpt = orderRepository.findById(id);
        if (orderOpt.isPresent()) {
            Order order = orderOpt.get();
            order.setStatus("Completed");
            // Save the updated order to the database
            return orderRepository.save(order);
        }
        return null; // Return null if order not found
    }

    // Create a new order
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public List<Order> getOrdersByUser(User user) {
        return orderRepository.findByUser(user);
    }


}
