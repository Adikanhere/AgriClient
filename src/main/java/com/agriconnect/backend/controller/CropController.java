//package com.agriconnect.backend.controller;
//
//import com.agriconnect.backend.model.Crop;
//import com.agriconnect.backend.repository.CropRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/market/crops")
//public class CropController {
//
//    @Autowired
//    private CropRepository cropRepository;
//
//    @GetMapping("/all")
//    public List<Crop> getAllCrops() {
//        return cropRepository.findAll();
//    }
//
//    @PostMapping("/add")
//    public Crop addCrop(@RequestBody Crop crop) {
//        return cropRepository.save(crop);
//    }
//
//    @PostMapping("/buy/{id}")
//    public ResponseEntity<String> buyCrop(@PathVariable Long id) {
//        Optional<Crop> cropOptional = cropRepository.findById(id);
//        if (cropOptional.isPresent()) {
//            Crop crop = cropOptional.get();
//            crop.setAvailability("Out of Stock");  // Assuming the crop is sold out after buying
//            cropRepository.save(crop);
//            return ResponseEntity.ok("Crop bought successfully!");
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Crop not found!");
//        }
//    }
//
//}








package com.agriconnect.backend.controller;

import com.agriconnect.backend.model.Crop;
import com.agriconnect.backend.repository.CropRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/market/crops")
@CrossOrigin(origins = "http://localhost:3000")  // Allow requests from the React app (adjust the URL as needed)
public class CropController {

    @Autowired
    private CropRepository cropRepository;

    // Get all crops
    @GetMapping("/all")
    public ResponseEntity<List<Crop>> getAllCrops() {
        List<Crop> crops = cropRepository.findAll();
        if (crops.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);  // 204 No Content
        }
        return new ResponseEntity<>(crops, HttpStatus.OK);  // 200 OK
    }

    // Add a new crop (with authorization check)
    @PreAuthorize("hasRole('ADMIN')")  // Only allow access to users with 'ADMIN' role (adjust as needed)
    @PostMapping("/add")
    public ResponseEntity<Crop> addCrop(@RequestBody Crop crop) {
        try {
            Crop savedCrop = cropRepository.save(crop);
            return new ResponseEntity<>(savedCrop, HttpStatus.CREATED);  // 201 Created
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);  // 500 Internal Server Error
        }
    }

    // Buy crop (update availability)
    @PostMapping("/buy/{id}")
    public ResponseEntity<String> buyCrop(@PathVariable Long id) {
        Optional<Crop> cropOptional = cropRepository.findById(id);
        if (cropOptional.isPresent()) {
            Crop crop = cropOptional.get();
            crop.setAvailability("Out of Stock");  // Mark the crop as sold out
            cropRepository.save(crop);
            return new ResponseEntity<>("Crop bought successfully!", HttpStatus.OK);  // 200 OK
        } else {
            return new ResponseEntity<>("Crop not found!", HttpStatus.NOT_FOUND);  // 404 Not Found
        }
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCrop(@PathVariable Long id) {
        cropRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/all")
    public ResponseEntity<?> deleteAllCrops() {
        cropRepository.deleteAll();
        return ResponseEntity.ok().build();
    }


}
