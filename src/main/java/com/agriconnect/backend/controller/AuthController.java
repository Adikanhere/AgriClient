//package com.agriconnect.backend.controller;
//
//import com.agriconnect.backend.dto.LoginRequest;
//import com.agriconnect.backend.model.User;
//import com.agriconnect.backend.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.web.bind.annotation.*;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/api/auth")
//public class AuthController {
//
//    @Autowired
//    private UserRepository userRepo;
//
//    @PostMapping("/register")
//    public ResponseEntity<String> register(@RequestBody User user) {
//        if (userRepo.findByEmail(user.getEmail()).isPresent()) {
//            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
//        }
//        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
//        userRepo.save(user);
//        return ResponseEntity.ok("User registered successfully");
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
//        User user = userRepo.findByEmail(request.getEmail())
//                .orElseThrow(() -> new RuntimeException("Invalid Email"));
//
//        if (!new BCryptPasswordEncoder().matches(request.getPassword(), user.getPassword())) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Password");
//        }
//
//        return ResponseEntity.ok("Login Successful");
//    }
//
//    @GetMapping("/me")
//    public ResponseEntity<?> me(@AuthenticationPrincipal UserDetails user) {
//        // user.getUsername() is their email
//        return userRepo.findByEmail(user.getUsername())
//                .map(u -> ResponseEntity.ok(new ProfileDto(u.getName(), u.getEmail())))
//                .orElse(ResponseEntity.notFound().build());
//    }
//
//    // DTO to avoid leaking password
//    public static class ProfileDto {
//        public final String name;
//        public final String email;
//        public ProfileDto(String name, String email) { this.name = name; this.email = email; }
//    }
//}
//
//
//


//
//package com.agriconnect.backend.controller;
//
//import com.agriconnect.backend.dto.LoginRequest;
//import com.agriconnect.backend.model.User;
//import com.agriconnect.backend.repository.UserRepository;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import jakarta.servlet.http.HttpServletRequest;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.*;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Date;
//import java.util.Optional;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/api/auth")
//public class AuthController {
//
//    @Autowired
//    private UserRepository userRepo;
//
//    private final String SECRET_KEY = "secret_key"; // Use a secure key in prod
//    private final long EXPIRATION_TIME = 1000 * 60 * 60; // 1 hour
//
//    @PostMapping("/register")
//    public ResponseEntity<String> register(@RequestBody User user) {
//        if (userRepo.findByEmail(user.getEmail()).isPresent()) {
//            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
//        }
//        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
//        userRepo.save(user);
//        return ResponseEntity.ok("User registered successfully");
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
//        User user = userRepo.findByEmail(request.getEmail())
//                .orElseThrow(() -> new RuntimeException("Invalid Email"));
//
//        if (!new BCryptPasswordEncoder().matches(request.getPassword(), user.getPassword())) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Password");
//        }
//
//        String token = generateToken(user.getEmail());
//
//        return ResponseEntity.ok(new JwtResponse(token));
//    }
//
//    @GetMapping("/me")
//    public ResponseEntity<?> me(HttpServletRequest request) {
//        String header = request.getHeader("Authorization");
//        if (header == null || !header.startsWith("Bearer ")) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Missing or invalid token");
//        }
//
//        String token = header.substring(7);
//        String email = extractEmail(token);
//
//        Optional<User> userOpt = userRepo.findByEmail(email);
//        if (userOpt.isPresent()) {
//            User user = userOpt.get();
//            return ResponseEntity.ok(new ProfileDto(user.getName(), user.getEmail()));
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
//        }
//    }
//
//    // Utility methods
//    private String generateToken(String email) {
//        return Jwts.builder()
//                .setSubject(email)
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
//                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
//                .compact();
//    }
//
//    private String extractEmail(String token) {
//        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody().getSubject();
//    }
//
//    public static class JwtResponse {
//        public String token;
//        public JwtResponse(String token) { this.token = token; }
//    }
//
//    public static class ProfileDto {
//        public final String name;
//        public final String email;
//        public ProfileDto(String name, String email) { this.name = name; this.email = email; }
//    }
//}


package com.agriconnect.backend.controller;

import com.agriconnect.backend.dto.LoginRequest;
import com.agriconnect.backend.model.User;
import com.agriconnect.backend.repository.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.Optional;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;        // For Keys.hmacShaKeyFor()
import java.security.Key;                    // For JWT signing key


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepo;

    private final String SECRET_KEY = "this_is_a_very_secret_key_for_jwt_123456"; // Use at least 256-bit for HS256
    private final long EXPIRATION_TIME = 1000 * 60 * 60; // 1 hour
    private final Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        if (userRepo.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
        }
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        userRepo.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        User user = userRepo.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid Email"));

        if (!new BCryptPasswordEncoder().matches(request.getPassword(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Password");
        }

        String token = generateToken(user.getEmail());
        return ResponseEntity.ok(new JwtResponse(token));
    }

//    @GetMapping("/me")
//    public ResponseEntity<?> me(HttpServletRequest request) {
//        String header = request.getHeader("Authorization");
//        if (header == null || !header.startsWith("Bearer ")) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Missing or invalid token");
//        }
//
//        String token = header.substring(7);
//        String email;
//        try {
//            email = extractEmail(token);
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token");
//        }
//
//        Optional<User> userOpt = userRepo.findByEmail(email);
//        if (userOpt.isPresent()) {
//            User user = userOpt.get();
//            return ResponseEntity.ok(new ProfileDto(user.getName(), user.getEmail()));
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
//        }
//    }

//    @GetMapping("/me")
//    public ResponseEntity<?> me(HttpServletRequest request) {
//        String header = request.getHeader("Authorization");
//        if (header == null || !header.startsWith("Bearer ")) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Missing or invalid token");
//        }
//
//        String token = header.substring(7);
//        System.out.println("Received Token: " + token); // Add this to log the token
//        String email = extractEmail(token);
//        System.out.println("Extracted Email: " + email); // Add this to log the extracted email
//
//        Optional<User> userOpt = userRepo.findByEmail(email);
//        if (userOpt.isPresent()) {
//            User user = userOpt.get();
//            return ResponseEntity.ok(new ProfileDto(user.getName(), user.getEmail()));
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
//        }
//    }

    @GetMapping("/me")
    public ResponseEntity<?> me(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        if (header == null || !header.startsWith("Bearer ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Missing or invalid token");
        }

        String token = header.substring(7);  // Extract token from Bearer
        String email = extractEmail(token);

        Optional<User> userOpt = userRepo.findByEmail(email);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            return ResponseEntity.ok(new ProfileDto(user.getName(), user.getEmail()));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }



    // Utility methods
    private String generateToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    private String extractEmail(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // Response DTOs
    public static class JwtResponse {
        public String token;
        public JwtResponse(String token) {
            this.token = token;
        }
    }

    public static class ProfileDto {
        public final String name;
        public final String email;
        public ProfileDto(String name, String email) {
            this.name = name;
            this.email = email;
        }
    }
}
