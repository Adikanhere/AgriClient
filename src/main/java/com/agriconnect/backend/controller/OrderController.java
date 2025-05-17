//package com.agriconnect.backend.controller;
//
//
//import com.agriconnect.backend.model.Order;          // Correct path to Order
//import com.agriconnect.backend.service.OrderService; // Correct path to OrderService
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@CrossOrigin(origins = "*")
//@RestController
//@RequestMapping("/api/orders")
//public class OrderController {
//
//    @Autowired
//    private OrderService orderService;
//
//    // Get all orders
//    @GetMapping
//    public List<Order> getAllOrders() {
//        return orderService.getAllOrders();
//    }
//
//    // Mark an order as completed
//    @PutMapping("/markCompleted/{id}")
//    public String markOrderAsCompleted(@PathVariable Long id) {
//        boolean isUpdated = orderService.markOrderAsCompleted(id);
//        if (isUpdated) {
//            return "Order marked as completed successfully!";
//        } else {
//            return "Order not found!";
//        }
//    }
//}





//
//
//package com.agriconnect.backend.controller;
//
//import com.agriconnect.backend.model.Order;
//import com.agriconnect.backend.service.OrderService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@CrossOrigin(origins = "*")
//@RestController
//@RequestMapping("/api/orders")
//public class OrderController {
//
//    @Autowired
//    private OrderService orderService;
//
//    // Get all orders
//    @GetMapping
//    public List<Order> getAllOrders() {
//        return orderService.getAllOrders();
//    }
//
//    // Mark an order as completed
//    @PutMapping("/{id}/complete")
//    public ResponseEntity<Order> completeOrder(@PathVariable Long id) {
//        Order updatedOrder = orderService.markOrderAsCompleted(id);
//
//        if (updatedOrder == null) {
//            return ResponseEntity.notFound().build();  // If order is not found, return 404
//        }
//
//        return ResponseEntity.ok(updatedOrder);  // Return the updated order
//    }
//
//    // Create a new order
//    @PostMapping
//    public Order createOrder(@RequestBody Order order) {
//        return orderService.createOrder(order);
//    }
//}
//

//
//
//package com.agriconnect.backend.controller;
//
//import com.agriconnect.backend.model.Order;
//import com.agriconnect.backend.model.User;
//import com.agriconnect.backend.repository.UserRepository;
//import com.agriconnect.backend.service.OrderService;
//import com.agriconnect.backend.config.JwtUtil;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@CrossOrigin(origins = "*")
//@RestController
//@RequestMapping("/api/orders")
//public class OrderController {
//
//    @Autowired
//    private OrderService orderService;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    // Get all orders for the logged-in user
//    @GetMapping
//    public ResponseEntity<List<Order>> getAllOrders(@RequestHeader("Authorization") String tokenHeader) {
//        try {
//            // Remove "Bearer " from the token
//            String token = tokenHeader.replace("Bearer ", "");
//
//            // Extract email from token
//            String email = JwtUtil.extractEmail(token);
//
//            // Find user by email
//            User user = userRepository.findByEmail(email)
//                    .orElseThrow(() -> new RuntimeException("User not found"));
//
//            // Get orders for this user
//            List<Order> orders = orderService.getOrdersByUser(user);
//
//            return ResponseEntity.ok(orders);
//        } catch (Exception e) {
//            return ResponseEntity.status(401).build(); // Unauthorized
//        }
//    }
//
//    // Mark an order as completed
//    @PutMapping("/{id}/complete")
//    public ResponseEntity<Order> completeOrder(@PathVariable Long id) {
//        Order updatedOrder = orderService.markOrderAsCompleted(id);
//        if (updatedOrder == null) {
//            return ResponseEntity.notFound().build();
//        }
//        return ResponseEntity.ok(updatedOrder);
//    }
//
//    // Create a new order
//    @PostMapping
//    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
//        return ResponseEntity.ok(orderService.createOrder(order));
//    }
//}


//
//package com.agriconnect.backend.controller;
//
//import com.agriconnect.backend.model.Order;
//import com.agriconnect.backend.model.User;
//import com.agriconnect.backend.repository.UserRepository;
//import com.agriconnect.backend.service.OrderService;
//import com.agriconnect.backend.config.JwtUtil;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@CrossOrigin(origins = "*")
//@RestController
//@RequestMapping("/api/orders")
//public class OrderController {
//
//    @Autowired
//    private OrderService orderService;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private JwtUtil jwtUtil; // Inject JwtUtil bean
//
//    // Get all orders for the logged-in user
//    @GetMapping
//    public ResponseEntity<List<Order>> getAllOrders(@RequestHeader("Authorization") String tokenHeader) {
//        try {
//            // Remove "Bearer " from the token
//            String token = tokenHeader.replace("Bearer ", "");
//
//            // Use injected JwtUtil bean to extract email
//            String email = jwtUtil.extractEmail(token);
//            System.out.println("Extracted Email: " + email);  // Debug log
//
//            // Find user by email
//            User user = userRepository.findByEmail(email)
//                    .orElseThrow(() -> new RuntimeException("User not found"));
//
//            // Get orders for this user
//            List<Order> orders = orderService.getOrdersByUser(user);
//
//            return ResponseEntity.ok(orders);
//        } catch (Exception e) {
//            System.out.println("Error: " + e.getMessage());  // Debug log
//            return ResponseEntity.status(401).build(); // Unauthorized
//        }
//    }
//
//    // Mark an order as completed
//    @PutMapping("/{id}/complete")
//    public ResponseEntity<Order> completeOrder(@PathVariable Long id) {
//        Order updatedOrder = orderService.markOrderAsCompleted(id);
//        if (updatedOrder == null) {
//            return ResponseEntity.notFound().build();
//        }
//        return ResponseEntity.ok(updatedOrder);
//    }
//
//
//
//
//    // OrderController.java
//    @PostMapping
//    public ResponseEntity<Order> createOrder(@RequestBody Order order, @RequestHeader("Authorization") String tokenHeader) {
//        try {
//            // Extract token
//            String token = tokenHeader.replace("Bearer ", "");
//
//            // Extract email from token
//            String email = jwtUtil.extractEmail(token);
//
//            // Find user by email
//            User user = userRepository.findByEmail(email)
//                    .orElseThrow(() -> new RuntimeException("User not found"));
//
//            // Set the user in the order
//            order.setUser(user);
//
//            // Save the order
//            Order savedOrder = orderService.createOrder(order);
//            return ResponseEntity.ok(savedOrder);
//
//        } catch (Exception e) {
//            System.out.println("Error while creating order: " + e.getMessage());
//            return ResponseEntity.status(401).build(); // Unauthorized
//        }
//    }
//
//}
//



package com.agriconnect.backend.controller;

import com.agriconnect.backend.model.Order;
import com.agriconnect.backend.model.User;
import com.agriconnect.backend.repository.UserRepository;
import com.agriconnect.backend.service.OrderService;
import com.agriconnect.backend.config.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders(@RequestHeader("Authorization") String tokenHeader) {
        try {
            String token = tokenHeader.replace("Bearer ", "");
            String email = jwtUtil.extractEmail(token);
            System.out.println("Extracted Email: " + email);
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new RuntimeException("User not found"));
            List<Order> orders = orderService.getOrdersByUser(user);
            return ResponseEntity.ok(orders);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return ResponseEntity.status(401).build();
        }
    }

    @PutMapping("/{id}/complete")
    public ResponseEntity<Order> completeOrder(@PathVariable Long id) {
        Order updatedOrder = orderService.markOrderAsCompleted(id);
        if (updatedOrder == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedOrder);
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order, @RequestHeader("Authorization") String tokenHeader) {
        try {
            String token = tokenHeader.replace("Bearer ", "");
            String email = jwtUtil.extractEmail(token);
            System.out.println("Looking for user with email: " + email);
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> {
                        System.out.println("User not found in DB!");
                        return new RuntimeException("User not found");
                    });

            order.setUser(user);
            Order savedOrder = orderService.createOrder(order);
            return ResponseEntity.ok(savedOrder);
        } catch (Exception e) {
            System.out.println("Error while creating order: " + e.getMessage());
            return ResponseEntity.status(401).build();
        }
    }
}
