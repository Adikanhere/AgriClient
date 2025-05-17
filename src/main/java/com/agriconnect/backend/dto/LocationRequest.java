package com.agriconnect.backend.dto;

import jakarta.validation.constraints.NotNull;

public class LocationRequest {

    @NotNull
    private Double latitude;

    @NotNull
    private Double longitude;

    private String city;

    // Getters
    public Double getLatitude() {
        return latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public String getCity() {
        return city;
    }

    // Setters
    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
