//package com.agriconnect.backend.config;
////
////import org.springframework.context.annotation.Bean;
////import org.springframework.context.annotation.Configuration;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
////import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
////import org.springframework.security.core.userdetails.User;
////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
////import org.springframework.security.crypto.password.PasswordEncoder;
////import org.springframework.security.web.SecurityFilterChain;
////
////@Configuration
////@EnableWebSecurity
////public class SecurityConfig {
////
////    // Bean to configure the password encoder for encoding passwords
////    @Bean
////    public PasswordEncoder passwordEncoder() {
////        return new BCryptPasswordEncoder();
////    }
////
////    @Bean
////    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
////        // Configure the HTTP security for your application
////        http
////                .csrf(csrf -> csrf.disable()) // Disable CSRF for development purposes
////                .authorizeHttpRequests(authorizeRequests ->
////                        authorizeRequests
////                                .requestMatchers("/api/auth/register", "/api/auth/login").permitAll() // Allow register and login
////                                .anyRequest().authenticated() // Require authentication for all other endpoints
////                );
////        return http.build();
////    }
////}
//
//
//
////package com.agriconnect.backend.config;
////
////import org.springframework.context.annotation.Bean;
////import org.springframework.context.annotation.Configuration;
////import org.springframework.security.config.Customizer;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
////import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
////import org.springframework.security.core.userdetails.User;
////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
////import org.springframework.security.crypto.password.PasswordEncoder;
////import org.springframework.security.web.SecurityFilterChain;
////
////@Configuration
////@EnableWebSecurity
////public class SecurityConfig {
////
////    // Bean to configure the password encoder for encoding passwords
////    @Bean
////    public PasswordEncoder passwordEncoder() {
////        return new BCryptPasswordEncoder();
////    }
////
////    @Bean
////    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
////        // Configure the HTTP security for your application
////        http
////                .csrf(csrf -> csrf.disable()) // Disable CSRF for development purposes
////                .authorizeHttpRequests(authorizeRequests ->
////                        authorizeRequests
////                                .requestMatchers("/api/auth/register", "/api/auth/login", "/api/market/nearby")  // Allow register, login, and nearby
////                                .permitAll()
////                                .anyRequest().authenticated() // Require authentication for all other endpoints
////                )
////                .formLogin(Customizer.withDefaults());
////
////        return http.build();
////    }
////}
//
//
////package com.agriconnect.backend.config;
////
////import org.springframework.context.annotation.Bean;
////import org.springframework.context.annotation.Configuration;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
////import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
////import org.springframework.security.crypto.password.PasswordEncoder;
////import org.springframework.security.web.SecurityFilterChain;
////
////@Configuration
////@EnableWebSecurity
////public class SecurityConfig {
////
////    // Bean to configure the password encoder for encoding passwords
////    @Bean
////    public PasswordEncoder passwordEncoder() {
////        return new BCryptPasswordEncoder();
////    }
////
////    @Bean
////    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
////        // New configuration for HTTP security in Spring Security 6.1+
////        http
////                .csrf(csrf -> csrf.disable()) // Disable CSRF for development purposes
////                .authorizeHttpRequests(authz ->
////                        authz
////                                .requestMatchers("/api/auth/register", "/api/auth/login") // Allow register and login without authentication
////                                .permitAll()
////                                .anyRequest() // Secure all other API endpoints
////                                .authenticated()
////                )
////                .formLogin(form -> form.disable()) // Disable default form login
////                .httpBasic(basic -> basic.disable()); // Disable basic HTTP authentication
////
////        return http.build();
////    }
////}
////
////
////package com.agriconnect.backend.config;
////
////import org.springframework.context.annotation.Bean;
////import org.springframework.context.annotation.Configuration;
////import org.springframework.security.config.Customizer;
////import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
////import org.springframework.security.web.SecurityFilterChain;
////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
////import org.springframework.security.crypto.password.PasswordEncoder;
////import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
////
////@Configuration
////@EnableWebSecurity
////public class SecurityConfig {
////
////    @Bean
////    public PasswordEncoder passwordEncoder() {
////        return new BCryptPasswordEncoder();
////    }
////
////    @Bean
////    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
////        http
////                .csrf(csrf -> csrf.disable()) // Disable CSRF for REST APIs
////                .authorizeHttpRequests(auth -> auth
////                        .requestMatchers(
////                                new AntPathRequestMatcher("/api/auth/register"),
////                                new AntPathRequestMatcher("/api/auth/login"),
////                                new AntPathRequestMatcher("/api/market/nearby")
////                        ).permitAll()
////                        .anyRequest().authenticated()
////                )
////                .httpBasic(Customizer.withDefaults()); // Allow basic HTTP (useful during development)
////
////        return http.build();
////    }
////}
//
//
//
//package com.agriconnect.backend.config;
////
////import org.springframework.context.annotation.Bean;
////import org.springframework.context.annotation.Configuration;
////import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
////import org.springframework.security.web.SecurityFilterChain;
////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
////import org.springframework.security.crypto.password.PasswordEncoder;
////import org.springframework.security.config.http.SessionCreationPolicy;
////
////@Configuration
////@EnableWebSecurity
////public class SecurityConfig {
////
////    @Bean
////    public PasswordEncoder passwordEncoder() {
////        return new BCryptPasswordEncoder();
////    }
////
////    @Bean
////    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
////        http
////                .csrf(csrf -> csrf.disable())
////                .authorizeHttpRequests(auth -> auth
////                        .requestMatchers("/api/auth/register", "/api/auth/login", "/api/market/nearby").permitAll()
////                        .anyRequest().authenticated()
////                )
////                .sessionManagement(session -> session
////                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 🔑 Important for JWT
////                );
////
////        return http.build();
////    }
////}
//
////package com.agriconnect.backend.config;
////
////import com.agriconnect.backend.repository.UserRepository;
////import org.springframework.context.annotation.Bean;
////import org.springframework.context.annotation.Configuration;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
////import org.springframework.security.config.http.SessionCreationPolicy;
////import org.springframework.security.web.SecurityFilterChain;
////import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
////
////@Configuration
////public class SecurityConfig {
////
////    private final UserRepository userRepo;
////
////    public SecurityConfig(UserRepository userRepo) {
////        this.userRepo = userRepo;
////    }
////
////    @Bean
////    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
////        http
////                .csrf(csrf -> csrf.disable())
////                .authorizeHttpRequests(auth -> auth
////                        .requestMatchers("/api/auth/register", "/api/auth/login", "/api/market/nearby").permitAll()
////                        .anyRequest().authenticated()
////                )
////                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
////                .addFilterBefore(new JwtAuthFilter(userRepo), UsernamePasswordAuthenticationFilter.class);
////
////        return http.build();
////    }
////}
//
//
////package com.agriconnect.backend.config;
////
////import com.agriconnect.backend.repository.UserRepository;
////import com.agriconnect.backend.config.JwtAuthFilter;
////import org.springframework.context.annotation.Bean;
////import org.springframework.context.annotation.Configuration;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
////import org.springframework.security.config.http.SessionCreationPolicy;
////import org.springframework.security.web.SecurityFilterChain;
////import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
////
////@Configuration
////public class SecurityConfig {
////
////    private final UserRepository userRepo;
////
////    public SecurityConfig(UserRepository userRepo) {
////        this.userRepo = userRepo;
////    }
////
////    @Bean
////    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
////        http
////                .csrf(csrf -> csrf.disable())
////                .authorizeHttpRequests(auth -> auth
////                        .requestMatchers("/api/auth/register", "/api/auth/login", "/api/market/nearby").permitAll()
////                        .anyRequest().authenticated()
////                )
////                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
////                .addFilterBefore(new JwtAuthFilter(userRepo), UsernamePasswordAuthenticationFilter.class);
////
////        return http.build();
////    }
////}
//
//
//
////  06/05/2025
//
////import com.agriconnect.backend.repository.UserRepository;
////import org.springframework.context.annotation.Bean;
////import org.springframework.context.annotation.Configuration;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
////import org.springframework.security.config.http.SessionCreationPolicy;
////import org.springframework.security.web.SecurityFilterChain;
////import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
////
////@Configuration
////public class SecurityConfig {
////
////    private final UserRepository userRepo;
////
////    public SecurityConfig(UserRepository userRepo) {
////        this.userRepo = userRepo;
////    }
////
////    @Bean
////    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
////        http
////                .csrf(csrf -> csrf.disable()) // ✅ disable CSRF for APIs
////                .authorizeHttpRequests(auth -> auth
////                        .requestMatchers("/api/auth/register", "/api/auth/login", "/api/market/nearby").permitAll() // ✅ Public APIs
////                        .anyRequest().authenticated() // ✅ All other APIs need auth
////                )
////                .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // ✅ No sessions
////                .addFilterBefore(new JwtAuthFilter(userRepo), UsernamePasswordAuthenticationFilter.class);
////
////        return http.build();
////    }
////}
//
//
//// 06/05/24
//
////import com.agriconnect.backend.repository.UserRepository;
////import org.springframework.context.annotation.Bean;
////import org.springframework.context.annotation.Configuration;
////import org.springframework.security.authentication.AuthenticationManager;
////import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
////import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
////import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
////import org.springframework.security.web.SecurityFilterChain;
////import org.springframework.security.config.http.SessionCreationPolicy;
////import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
////import org.springframework.web.cors.CorsConfiguration;
////import org.springframework.web.cors.CorsConfigurationSource;
////import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
////
////import java.util.List;
////
////@Configuration
////@EnableWebSecurity
////public class SecurityConfig {
////
////    private final JwtAuthFilter jwtAuthFilter;
////
////    public SecurityConfig(UserRepository userRepository) {
////        this.jwtAuthFilter = new JwtAuthFilter(userRepository);
////    }
////
////    @Bean
////    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
////        http
////                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
////                .csrf(AbstractHttpConfigurer::disable)
////                .authorizeHttpRequests(auth -> auth
////                        .requestMatchers("/api/auth/login", "/api/auth/register").permitAll()
////                        .anyRequest().authenticated()
////                )
////                .sessionManagement(sess -> sess
////                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
////                )
////                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
////
////        return http.build();
////    }
////
////    @Bean
////    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
////        return config.getAuthenticationManager();
////    }
////
////    @Bean
////    public CorsConfigurationSource corsConfigurationSource() {
////        CorsConfiguration config = new CorsConfiguration();
////        config.setAllowedOrigins(List.of("http://localhost:3000"));
////        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
////        config.setAllowedHeaders(List.of("*"));
////        config.setAllowCredentials(true);
////
////        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
////        source.registerCorsConfiguration("/**", config);
////        return source;
////    }
////}






//import com.agriconnect.backend.repository.UserRepository;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.List;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    private final JwtAuthFilter jwtAuthFilter;
//
//    public SecurityConfig(UserRepository userRepository) {
//        this.jwtAuthFilter = new JwtAuthFilter(userRepository);
//    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//                .cors(cors -> cors.configurationSource(corsConfigurationSource())) // Set up CORS
//                .csrf(AbstractHttpConfigurer::disable) // Disable CSRF for REST API
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers("/api/auth/login", "/api/auth/register","/api/market/crops/**","/api/market/crops/add","/api/market/crops/buy/**", "/api/orders").permitAll() // Allow login and register routes
//                        .anyRequest().authenticated() // Any other request requires authentication
//                )
//                .sessionManagement(sess -> sess
//                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Stateless API (no session)
//                )
//                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class); // Add JWT filter before authentication
//
//        return http.build();
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
//        return config.getAuthenticationManager(); // Return AuthenticationManager
//    }
//
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowedOrigins(List.of("http://localhost:3000")); // Allow the frontend URL (can be more specific)
//        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")); // Allowed HTTP methods
//        config.setAllowedHeaders(List.of("*")); // Allow all headers
//        config.setAllowCredentials(true); // Allow credentials like cookies or authentication headers
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", config); // Apply CORS configuration for all endpoints
//        return source;
//    }
//}


// 08/05/25


//package com.agriconnect.backend.config;
//
//import com.agriconnect.backend.repository.UserRepository;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.List;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    private final JwtAuthFilter jwtAuthFilter;
//
//    public SecurityConfig(UserRepository userRepository) {
//        this.jwtAuthFilter = new JwtAuthFilter(userRepository);
//    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//                .cors(cors -> cors.configurationSource(corsConfigurationSource())) // Set up CORS
//                .csrf(AbstractHttpConfigurer::disable) // Disable CSRF for REST API
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers("/api/auth/login", "/api/auth/register", "/api/market/crops/**", "/api/market/crops/add", "/api/market/crops/buy/**", "/api/orders").permitAll() // Allow login, register, and other routes
//                        .anyRequest().authenticated() // Any other request requires authentication
//                )
//
//
//
//                .sessionManagement(sess -> sess
//                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Stateless API (no session)
//                )
//                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class); // Add JWT filter before authentication
//
//        return http.build();
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
//        return config.getAuthenticationManager(); // Return AuthenticationManager
//    }
//
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowedOrigins(List.of("http://localhost:3000")); // Allow the frontend URL (can be more specific)
//        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")); // Allowed HTTP methods
//        config.setAllowedHeaders(List.of("*")); // Allow all headers
//        config.setAllowCredentials(true); // Allow credentials like cookies or authentication headers
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", config); // Apply CORS configuration for all endpoints
//        return source;
//    }
//}


//
//package com.agriconnect.backend.config;
//
//import com.agriconnect.backend.repository.UserRepository;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.List;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    private final JwtAuthFilter jwtAuthFilter;
//
//    public SecurityConfig(UserRepository userRepository) {
//        this.jwtAuthFilter = new JwtAuthFilter(userRepository);
//    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//                .cors(cors -> cors.configurationSource(corsConfigurationSource())) // Enable CORS
//                .csrf(AbstractHttpConfigurer::disable) // Disable CSRF for stateless API
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers(
//                                "/api/auth/login",
//                                "/api/auth/register",
//                                "/api/market/crops/**",
//                                "/api/orders/**"
//                        ).permitAll() // Allow all endpoints under /api/orders/** (GET, POST, PUT, etc.)
//                        .anyRequest().authenticated() // All other endpoints require authentication
//                )
//                .sessionManagement(sess -> sess
//                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // No session
//                )
//                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class); // Add JWT filter
//
//        return http.build();
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
//        return config.getAuthenticationManager();
//    }
//
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowedOrigins(List.of("http://localhost:3000")); // Frontend origin
//        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")); // Methods allowed
//        config.setAllowedHeaders(List.of("*")); // All headers allowed
//        config.setAllowCredentials(true); // Allow cookies/auth headers
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", config); // Apply to all endpoints
//        return source;
//    }
//}


//11/05/25

//package com.agriconnect.backend.config;
//
//import com.agriconnect.backend.repository.UserRepository;
//import com.agriconnect.backend.config.JwtUtil;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    private final UserRepository userRepository;
//    private final JwtUtil jwtUtil;
//
//    public SecurityConfig(UserRepository userRepository, JwtUtil jwtUtil) {
//        this.userRepository = userRepository;
//        this.jwtUtil = jwtUtil;
//    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        JwtAuthFilter jwtAuthFilter = new JwtAuthFilter(userRepository, jwtUtil);
//
//        http
//                .csrf().disable()  // Disable CSRF protection (for stateless API)
//                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // Stateless sessions
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers(
//                                "/api/auth/login",  // Allow login without authentication
//                                "/api/auth/register",  // Allow registration without authentication
//                                "/api/market/crops/**"  // Allow crop-related public APIs
//                        ).permitAll()
//                        .requestMatchers("/api/orders/**").authenticated() // Protect orders API (requires authentication)
//                        .anyRequest().authenticated() // Any other request must be authenticated
//                )
//                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class); // Add JWT filter before the default filter
//
//        return http.build();
//    }
//}
//

//
//
//package com.agriconnect.backend.config;
//
//import com.agriconnect.backend.repository.UserRepository;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    private final UserRepository userRepository;
//    private final JwtUtil jwtUtil;
//
//    public SecurityConfig(UserRepository userRepository, JwtUtil jwtUtil) {
//        this.userRepository = userRepository;
//        this.jwtUtil = jwtUtil;
//    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        JwtAuthFilter jwtAuthFilter = new JwtAuthFilter(userRepository, jwtUtil);
//
//        http
//                .csrf().disable()
//                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers(
//                                "/api/auth/login",
//                                "/api/auth/register",
//                                "/api/market/all",
//                                "/api/market/nearby",
//                                "/api/market/me",
//                                "/api/market/crops/**"
//                        ).permitAll()
//                        .requestMatchers("/api/auth/me").authenticated() // ✅ Add this
//
//                        .requestMatchers("/api/orders/**").authenticated()
//                        .anyRequest().authenticated()
//                )
//                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
//
//        return http.build();
//    }
//}




//  15-05-25

//package com.agriconnect.backend.config;
//
//import com.agriconnect.backend.repository.UserRepository;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    private final UserRepository userRepository;
//    private final JwtUtil jwtUtil;
//
//    public SecurityConfig(UserRepository userRepository, JwtUtil jwtUtil) {
//        this.userRepository = userRepository;
//        this.jwtUtil = jwtUtil;
//    }
//
////    @Bean
////    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
////        JwtAuthFilter jwtAuthFilter = new JwtAuthFilter(userRepository, jwtUtil);
////
////        http
////                .csrf(csrf -> csrf.disable()) // Disabling CSRF protection in Spring Security 6.x
////                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//////                .authorizeHttpRequests(auth -> auth
//////                        .requestMatchers(
//////                                "/api/auth/login",
//////                                "/api/auth/register",
//////                                "/api/market/all",
//////                                "/api/market/nearby",
//////                                "/api/market/me",
//////                                "/api/market/crops/**",
//////                                "/api/auth/me"
//////                        ).permitAll()
//////                        .requestMatchers("/api/auth/me").authenticated() // Ensure `/api/auth/me` is authenticated
//////                        .requestMatchers("/api/orders/**").authenticated()
//////                        .anyRequest().authenticated()
//////                )
////
////                .authorizeHttpRequests(auth -> auth
////                        .requestMatchers(
////                                "/api/auth/login",
////                                "/api/auth/register",
////                                "/api/market/all",
////                                "/api/market/nearby",
////                                "/api/market/me",
////                                "/api/market/crops/**",
////                                "/api/auth/me"
////                        ).permitAll()
////
////                        .requestMatchers(
////                                "/api/market/crops/add",
////                                "/api/market/crops/delete/**",
////                                "/api/market/crops/buy/**" // ❗ Require authentication for BUY
////                        ).authenticated()
////
////                        .requestMatchers("/api/orders/**").authenticated()
////                        .anyRequest().authenticated()
////                )
////
////                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
////
////        return http.build();
////    }
//
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        JwtAuthFilter jwtAuthFilter = new JwtAuthFilter(userRepository, jwtUtil);
//
//        http
//                .csrf(csrf -> csrf.disable()) // Disabling CSRF protection in Spring Security 6.x
//                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers(
//                                "/api/auth/login",
//                                "/api/auth/register",
//                                "/api/market/all",
//                                "/api/market/nearby",
//                                "/api/market/me",
//                                "/api/market/crops/**",
//                                "/api/auth/me"
//                        ).permitAll()
//
//                        .requestMatchers(
//                                "/api/market/crops/add",
//                                "/api/market/crops/delete/**",
//                                "/api/market/crops/buy/**"
//                        ).authenticated()
//
//                        .requestMatchers("/api/orders/**").authenticated()
//                        .anyRequest().authenticated()
//                )
//                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
//
//        return http.build();
//    }
//}


//
//package com.agriconnect.backend.config;
//
//import com.agriconnect.backend.repository.UserRepository;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.List;
//
//import static org.springframework.security.config.Customizer.withDefaults;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    private final UserRepository userRepository;
//    private final JwtUtil jwtUtil;
//
//    public SecurityConfig(UserRepository userRepository, JwtUtil jwtUtil) {
//        this.userRepository = userRepository;
//        this.jwtUtil = jwtUtil;
//    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        JwtAuthFilter jwtAuthFilter = new JwtAuthFilter(userRepository, jwtUtil);
//
//        http
//                .cors(withDefaults()) // ✅ Enable CORS support
//                .csrf(csrf -> csrf.disable())
//                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers(
//                                "/api/auth/login",
//                                "/api/auth/register",
//                                "/api/market/all",
//                                "/api/market/nearby",
//                                "/api/market/me",
//                                "/api/market/crops/**",
//                                "/api/auth/me"
//                        ).permitAll()
//
//                        .requestMatchers(
//                                "/api/market/crops/add",
//                                "/api/market/crops/delete/**",
//                                "/api/market/crops/buy/**"
//                        ).authenticated()
//
//                        .requestMatchers("/api/auth/**").permitAll()
//                        .requestMatchers("/api/orders/**").authenticated()
//                        .anyRequest().authenticated()
//                )
//                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
//
//        return http.build();
//    }
//
//    // ✅ Define global CORS configuration
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowedOrigins(List.of("http://localhost:3000")); // frontend origin
//        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
//        config.setAllowedHeaders(List.of("*"));
//        config.setAllowCredentials(true); // if using cookies or Authorization header
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", config);
//        return source;
//    }
//}







package com.agriconnect.backend.config;

import com.agriconnect.backend.repository.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public SecurityConfig(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        JwtAuthFilter jwtAuthFilter = new JwtAuthFilter(userRepository, jwtUtil);

        http
                .cors(withDefaults())
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(
                                "/api/auth/login",
                                "/api/auth/register",
                                "/api/market/all",
                                "/api/market/nearby",
                                "/api/market/me",
                                "/api/market/crops/**",
                                "/api/auth/me"
                        ).permitAll()

                        .requestMatchers("/api/orders/**").authenticated()
                        .anyRequest().authenticated()
                )
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:3000")); // React or Postman frontend
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("*"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}
