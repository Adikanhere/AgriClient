package com.agriconnect.backend.repository;

import com.agriconnect.backend.model.Market;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarketRepository extends JpaRepository<Market, Long> {
    // You can add custom queries if needed, like finding a market by its name or location
}


