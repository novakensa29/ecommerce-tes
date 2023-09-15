package com.ecommerce.backen.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.backen.model.Category;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {
    
}
