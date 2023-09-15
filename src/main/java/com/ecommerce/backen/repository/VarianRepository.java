package com.ecommerce.backen.repository;

import org.springframework.stereotype.Repository;

import com.ecommerce.backen.model.Variant;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface VarianRepository extends JpaRepository<Variant, Integer> {
    
}
