package com.ecommerce.backen.dto;

import java.util.List;

public class CartListDto {
    List<CartItemDto> cartItems;
    private double totalPrice;
    public CartListDto() {
    }
    public List<CartItemDto> getCartItems() {
        return cartItems;
    }
    public void setCartItems(List<CartItemDto> cartItems) {
        this.cartItems = cartItems;
    }
    public double getTotalPrice() {
        return totalPrice;
    }
    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
    
    
}
