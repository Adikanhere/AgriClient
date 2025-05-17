package com.agriconnect.backend.service;

import com.agriconnect.backend.model.Market;
import com.agriconnect.backend.repository.MarketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarketService {

    @Autowired
    private MarketRepository marketRepository;

    public Market findNearestMarket(double userLatitude, double userLongitude) {
        List<Market> markets = marketRepository.findAll();
        Market nearestMarket = null;
        double minDistance = Double.MAX_VALUE;

        for (Market market : markets) {
            double distance = calculateDistance(userLatitude, userLongitude, market.getLatitude(), market.getLongitude());
            if (distance < minDistance) {
                minDistance = distance;
                nearestMarket = market;
            }
        }

        return nearestMarket;
    }

    // Haversine formula to calculate distance between two points on the earth
    private double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
        final int R = 6371; // Radius of the earth in km
        double latDistance = Math.toRadians(lat2 - lat1);
        double lonDistance = Math.toRadians(lon2 - lon1);
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2) +
                Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2)) *
                        Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double distance = R * c; // Distance in km
        return distance;
    }
}
