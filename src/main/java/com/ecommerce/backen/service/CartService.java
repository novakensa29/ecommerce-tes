package com.ecommerce.backen.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ecommerce.backen.common.ApiResponse;
import com.ecommerce.backen.dto.CartDto;
import com.ecommerce.backen.dto.CartItemDto;
import com.ecommerce.backen.dto.CartListDto;
import com.ecommerce.backen.model.Cart;
import com.ecommerce.backen.model.Product;
import com.ecommerce.backen.repository.CartRepository;

@Service
public class CartService {
    @Autowired
    ProductService productService;

    @Autowired
    CartRepository cartRepository;

    public void addTocart(CartDto cartDto, Product product) {
        Cart cart = new Cart();
        cart.setProduct(product);
        cart.setQuantity(cartDto.getQuantity());
        cart.setCreatedDate(new Date());
        cartRepository.save(cart);
    }

    public CartListDto listCart() {
        List<Cart> cartList = cartRepository.findAll();
    
        List<CartItemDto> cartItems = new ArrayList<>();
        double totalCost = 0;
        for (Cart cart: cartList) {
            CartItemDto cartItemDto = new CartItemDto(cart);
            totalCost += cartItemDto.getQuantity() * cart.getProduct().getPrice();
            cartItems.add(cartItemDto);
        }

        CartListDto cartListDto = new CartListDto();
        cartListDto.setTotalPrice(totalCost);
        cartListDto.setCartItems(cartItems);
        return cartListDto;
    }

    public void deleteCart(Integer itemId, CartDto cartDto) throws Exception {
        Optional<Cart> optionalCart = cartRepository.findById(cartDto.getId());
        if(!optionalCart.isPresent()) {
            throw new Exception("Cart Not Present");
        }

        Cart cart = optionalCart.get();
        cartRepository.delete(cart);
    }


    
}
