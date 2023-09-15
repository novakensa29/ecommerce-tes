package com.ecommerce.backen.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backen.common.ApiResponse;
import com.ecommerce.backen.dto.CartDto;
import com.ecommerce.backen.dto.CartListDto;
import com.ecommerce.backen.model.Cart;
import com.ecommerce.backen.model.Product;
import com.ecommerce.backen.repository.CartRepository;
import com.ecommerce.backen.repository.ProductRepository;
import com.ecommerce.backen.service.CartService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/cart")
public class CartController {
    
    @Autowired
    private CartService cartService;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CartRepository cartRepository;

    @PostMapping("/add")
    public ResponseEntity<ApiResponse> addCart(@RequestBody CartDto cartDto) {
        Optional<Product> optionalProduct = productRepository.findById(cartDto.getProductId());
        if(!optionalProduct.isPresent()) {
            return new ResponseEntity<>(new ApiResponse(false, "Product Tidak Ada"), HttpStatus.BAD_REQUEST);
        }
        cartService.addTocart(cartDto, optionalProduct.get());
        return new ResponseEntity<>(new ApiResponse(true, "Telah masuk ke dalam Cart"), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<CartListDto> getCart() {
        CartListDto cartListDto = cartService.listCart();
        return new ResponseEntity<>(cartListDto, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{cartItemId}")
    public ResponseEntity<ApiResponse> deleteCartItem(@PathVariable("cartItemId") Integer itemId, @RequestBody CartDto cartDto) throws Exception {
        cartService.deleteCart(itemId, cartDto);
        return new ResponseEntity<>(new ApiResponse(true, "Telah dihapus dari Cart"), HttpStatus.OK);
    }
}
