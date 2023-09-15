package com.ecommerce.backen.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backen.model.Variant;
import com.ecommerce.backen.repository.VarianRepository;

@Service
public class VarianService {
    
    @Autowired
    VarianRepository varianRepository;

    public void createVariant(Variant variant) {
        varianRepository.save(variant);
    }

    public List<Variant> listVariant() {
        return varianRepository.findAll();
    }

}
