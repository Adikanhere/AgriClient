package com.agriconnect.backend.repository;

import com.agriconnect.backend.model.Order;
import com.agriconnect.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUser(User user);

}