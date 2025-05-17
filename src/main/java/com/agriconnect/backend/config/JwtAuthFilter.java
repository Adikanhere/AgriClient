//package com.agriconnect.backend.config;
//
//import com.agriconnect.backend.repository.UserRepository;
//import io.jsonwebtoken.Jwts;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//import java.util.Collections;
//
//public class JwtAuthFilter extends OncePerRequestFilter {
//
//    private final String SECRET_KEY = "secret_key";
//    private final UserRepository userRepo;
//
//    public JwtAuthFilter(UserRepository userRepo) {
//        this.userRepo = userRepo;
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request,
//                                    HttpServletResponse response,
//                                    FilterChain filterChain)
//            throws ServletException, IOException {
//
//        String header = request.getHeader("Authorization");
//        if (header != null && header.startsWith("Bearer ")) {
//            String token = header.substring(7);
//
//            try {
//                String email = Jwts.parser()
//                        .setSigningKey(SECRET_KEY)
//                        .parseClaimsJws(token)
//                        .getBody()
//                        .getSubject();
//
//                if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//                    userRepo.findByEmail(email).ifPresent(user -> {
//                        UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
//                                email, null, Collections.emptyList()
//                        );
//                        auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                        SecurityContextHolder.getContext().setAuthentication(auth);
//                    });
//                }
//            } catch (Exception e) {
//                // Optional: log or handle invalid token
//            }
//        }
//
//        filterChain.doFilter(request, response);
//    }
//}

//
//
//// File: JwtAuthFilter.java
//package com.agriconnect.backend.config;
//
//import com.agriconnect.backend.repository.UserRepository;
//import io.jsonwebtoken.Jwts;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//import java.util.Collections;
//
//public class JwtAuthFilter extends OncePerRequestFilter {
//
//    private final String SECRET_KEY = "secret_key";
//    private final UserRepository userRepo;
//
//    public JwtAuthFilter(UserRepository userRepo) {
//        this.userRepo = userRepo;
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request,
//                                    HttpServletResponse response,
//                                    FilterChain filterChain)
//            throws ServletException, IOException {
//
//        String header = request.getHeader("Authorization");
//        if (header != null && header.startsWith("Bearer ")) {
//            String token = header.substring(7);
//            try {
//                String email = Jwts.parser()
//                        .setSigningKey(SECRET_KEY)
//                        .parseClaimsJws(token)
//                        .getBody()
//                        .getSubject();
//
//                if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//                    userRepo.findByEmail(email).ifPresent(user -> {
//                        UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
//                                email, null, Collections.emptyList()
//                        );
//                        auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                        SecurityContextHolder.getContext().setAuthentication(auth);
//                    });
//                }
//
//            } catch (Exception ex) {
//                // Optional: log token error
//            }
//        }
//
//        filterChain.doFilter(request, response);
//    }
//}

//
//package com.agriconnect.backend.config;
//
//import com.agriconnect.backend.model.User;
//import com.agriconnect.backend.repository.UserRepository;
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//
//public class JwtAuthFilter extends OncePerRequestFilter {
//
//    private final UserRepository userRepo;
//    private final String SECRET_KEY = "secret_key";
//
//    public JwtAuthFilter(UserRepository userRepo) {
//        this.userRepo = userRepo;
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request,
//                                    HttpServletResponse response,
//                                    FilterChain filterChain)
//            throws ServletException, IOException {
//
//        String authHeader = request.getHeader("Authorization");
//
//        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
//            filterChain.doFilter(request, response);
//            return;
//        }
//
//        String token = authHeader.substring(7);
//
//        try {
//            Claims claims = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
//            String email = claims.getSubject();
//
//            User user = userRepo.findByEmail(email).orElse(null);
//
//            if (user != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//                CustomUserDetails userDetails = new CustomUserDetails(user);
//                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
//                        userDetails, null, userDetails.getAuthorities()
//                );
//                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                SecurityContextHolder.getContext().setAuthentication(authToken);
//            }
//        } catch (Exception e) {
//            System.out.println("Invalid JWT: " + e.getMessage());
//        }
//
//        filterChain.doFilter(request, response);
//    }
//}



//  08/05/25


//package com.agriconnect.backend.config;
//
//import com.agriconnect.backend.model.User;
//import com.agriconnect.backend.repository.UserRepository;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.security.Keys;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//import java.nio.charset.StandardCharsets;
//import java.security.Key;
//import java.util.Collections;
//
//public class JwtAuthFilter extends OncePerRequestFilter {
//
//    private final UserRepository userRepo;
//    private final String SECRET_KEY = "this_is_a_very_secret_key_for_jwt_123456";
//    private final Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));
//
//    public JwtAuthFilter(UserRepository userRepo) {
//        this.userRepo = userRepo;
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request,
//                                    HttpServletResponse response,
//                                    FilterChain filterChain)
//            throws ServletException, IOException {
//
//        String header = request.getHeader("Authorization");
//
//        if (header == null || !header.startsWith("Bearer ")) {
//            filterChain.doFilter(request, response);
//            return;
//        }
//
//        String token = header.substring(7);
//        String email;
//
//        try {
//            email = Jwts.parserBuilder()
//                    .setSigningKey(key)
//                    .build()
//                    .parseClaimsJws(token)
//                    .getBody()
//                    .getSubject();
//        } catch (Exception e) {
//            System.out.println("JWT error: " + e.getMessage());
//            filterChain.doFilter(request, response);
//            return;
//        }
//
//        User user = userRepo.findByEmail(email).orElse(null);
//        if (user != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//            UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
//                    user, null, Collections.emptyList() // ✅ use empty list if no roles
//            );
//            auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//            SecurityContextHolder.getContext().setAuthentication(auth);
//        }
//
//        filterChain.doFilter(request, response);
//    }
//}



//package com.agriconnect.backend.config;
//
//import com.agriconnect.backend.model.User;
//import com.agriconnect.backend.repository.UserRepository;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.security.Keys;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//import java.nio.charset.StandardCharsets;
//import java.security.Key;
//import java.util.Collections;
//
//public class JwtAuthFilter extends OncePerRequestFilter {
//
//    private final UserRepository userRepo;
//    private final String SECRET_KEY = "this_is_a_very_secret_key_for_jwt_123456";
//    private final Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));
//
//    public JwtAuthFilter(UserRepository userRepo) {
//        this.userRepo = userRepo;
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request,
//                                    HttpServletResponse response,
//                                    FilterChain filterChain)
//            throws ServletException, IOException {
//
//        // ✅ Skip JWT validation for public paths
//        String path = request.getRequestURI();
//        if (path.startsWith("/api/auth/") ||
//                path.startsWith("/api/market/crops") ||
//                path.startsWith("/api/orders")) {
//            filterChain.doFilter(request, response);
//            return;
//        }
//
//        String header = request.getHeader("Authorization");
//
//        if (header == null || !header.startsWith("Bearer ")) {
//            filterChain.doFilter(request, response);
//            return;
//        }
//
//        String token = header.substring(7);
//        String email;
//
//        try {
//            email = Jwts.parserBuilder()
//                    .setSigningKey(key)
//                    .build()
//                    .parseClaimsJws(token)
//                    .getBody()
//                    .getSubject();
//        } catch (Exception e) {
//            System.out.println("JWT error: " + e.getMessage());
//            filterChain.doFilter(request, response);
//            return;
//        }
//
//        User user = userRepo.findByEmail(email).orElse(null);
//        if (user != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//            UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
//                    user, null, Collections.emptyList()
//            );
//            auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//            SecurityContextHolder.getContext().setAuthentication(auth);
//        }
//
//        filterChain.doFilter(request, response);
//    }
//}



//
//package com.agriconnect.backend.config;
//
//import com.agriconnect.backend.repository.UserRepository;
//import com.agriconnect.backend.model.User;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//public class JwtAuthFilter extends OncePerRequestFilter {
//
//    private final UserRepository userRepository;
//    private final JwtUtil jwtUtil;
//
//    public JwtAuthFilter(UserRepository userRepository, JwtUtil jwtUtil) {
//        this.userRepository = userRepository;
//        this.jwtUtil = jwtUtil;
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//            throws ServletException, IOException {
//        // Extract the JWT token from the Authorization header
//        String token = extractToken(request);
//
//        if (token != null && jwtUtil.isTokenValid(token)) {
//            String email = jwtUtil.extractEmail(token);
//            User user = userRepository.findByEmail(email)
//                    .orElseThrow(() -> new RuntimeException("User not found"));
//
//            // Set authentication in Spring Security Context
//            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
//                    user, null, user.getAuthorities());
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//        }
//
//        // Proceed with the request
//        filterChain.doFilter(request, response);
//    }
//
//    // Helper method to extract the token from the Authorization header
//    private String extractToken(HttpServletRequest request) {
//        String tokenHeader = request.getHeader("Authorization");
//        if (tokenHeader != null && tokenHeader.startsWith("Bearer ")) {
//            return tokenHeader.substring(7); // Remove the "Bearer " prefix
//        }
//        return null;
//    }
//}











package com.agriconnect.backend.config;

import com.agriconnect.backend.model.User;
import com.agriconnect.backend.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class JwtAuthFilter extends OncePerRequestFilter {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public JwtAuthFilter(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        // Extract token from Authorization header
        String token = extractToken(request);

        if (token != null && jwtUtil.isTokenValid(token)) {
            String email = jwtUtil.extractEmail(token);
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new RuntimeException("User not found"));

            // Wrap User in CustomUserDetails
            CustomUserDetails userDetails = new CustomUserDetails(user);

            // Set authentication in SecurityContext using userDetails
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                    userDetails, null, userDetails.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
    }

    // Helper method to extract Bearer token from header
    private String extractToken(HttpServletRequest request) {
        String tokenHeader = request.getHeader("Authorization");
        if (tokenHeader != null && tokenHeader.startsWith("Bearer ")) {
            return tokenHeader.substring(7); // Remove "Bearer " prefix
        }
        return null;
    }
}
