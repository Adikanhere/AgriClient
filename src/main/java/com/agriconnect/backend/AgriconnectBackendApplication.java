package com.agriconnect.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.agriconnect.backend.repository")
@EntityScan(basePackages = "com.agriconnect.backend.model") // specify the package for entities
public class AgriconnectBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgriconnectBackendApplication.class, args);
	}

}
