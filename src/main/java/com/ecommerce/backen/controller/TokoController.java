package com.ecommerce.backen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backen.common.ApiResponse;
import com.ecommerce.backen.model.Toko;
import com.ecommerce.backen.service.TokoService;

@RestController
@RequestMapping("/toko")
public class TokoController {
    
    @Autowired
    TokoController tokoController;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse> createToko(@RequestBody Toko toko) {
        TokoService.createService(toko);
        return new ResponseEntity<>(new ApiResponse(true, "Toko Baru telah dibuat"), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public List<Toko> listToko() {
        return TokoService.listToko();
    }
}
