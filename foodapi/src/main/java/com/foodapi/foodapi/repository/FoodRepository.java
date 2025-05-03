package com.foodapi.foodapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapi.foodapi.model.Food;

public interface FoodRepository extends JpaRepository<Food, Long> {
}
