//package com.agriconnect.backend.controller;
//
//import com.agriconnect.backend.dto.LocationRequest;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/market")
//public class MarketController {
//
//    @PostMapping("/nearby")
//    public ResponseEntity<String> getNearbyMarket(@RequestBody LocationRequest location) {
//        // placeholder logic
//        return ResponseEntity.ok("Nearest market to " + location.getLatitude() + ", " + location.getLongitude());
//    }
//}




package com.agriconnect.backend.controller;

import com.agriconnect.backend.dto.LocationRequest;
import com.agriconnect.backend.model.Market;
import com.agriconnect.backend.repository.MarketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")   // or "*" to allow any
@RestController
@RequestMapping("/api/market")
public class MarketController {

    @Autowired
    private MarketRepository marketRepository;

    @GetMapping("/all")
    public ResponseEntity<List<Market>> getAllMarkets() {
        List<Market> markets = marketRepository.findAll();
        return ResponseEntity.ok(markets);
    }

    @PostMapping("/nearby")
    public ResponseEntity<String> getNearbyMarket(@RequestBody LocationRequest location) {
        double userLat = location.getLatitude();
        double userLon = location.getLongitude();

        List<Market> allMarkets = marketRepository.findAll();

        Market nearestMarket = null;
        double minDistance = Double.MAX_VALUE;

        for (Market market : allMarkets) {
            double distance = haversine(userLat, userLon, market.getLatitude(), market.getLongitude());
            if (distance < minDistance) {
                minDistance = distance;
                nearestMarket = market;
            }
        }

        if (nearestMarket != null) {
            return ResponseEntity.ok("Nearest market is: " + nearestMarket.getName());
        } else {
            return ResponseEntity.ok("No markets found.");
        }
    }

    // Haversine formula to calculate distance between two lat/lon points
    private double haversine(double lat1, double lon1, double lat2, double lon2) {
        double R = 6371; // Radius of Earth in km
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);
        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
}
