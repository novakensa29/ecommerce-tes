package com.ecommerce.backen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backen.common.ApiResponse;
import com.ecommerce.backen.model.Variant;
import com.ecommerce.backen.service.VarianService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/variant")
public class VariantController {

    @Autowired
    VarianService varianService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse> createVariant(@RequestBody Variant variant) {
        varianService.createVariant(variant);
        return new ResponseEntity<>(new ApiResponse(true, "Varian telah dibuat"), HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public List<Variant> listVariant() {
        return varianService.listVariant();
    }
}
