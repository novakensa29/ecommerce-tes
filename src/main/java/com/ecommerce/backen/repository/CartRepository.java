package com.ecommerce.backen.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.backen.model.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    
}
