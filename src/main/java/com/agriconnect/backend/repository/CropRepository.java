package com.agriconnect.backend.repository;

import com.agriconnect.backend.model.Crop;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CropRepository extends JpaRepository<Crop, Long> {
}
