package com.ecommerce.backen.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.backen.model.Toko;

@Repository
public interface TokoRepository extends JpaRepository<Toko, Integer> {
    
}
