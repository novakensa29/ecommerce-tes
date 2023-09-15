package com.ecommerce.backen.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backen.model.Toko;
import com.ecommerce.backen.repository.TokoRepository;

@Service
public class TokoService {

    @Autowired
    static
    TokoRepository tokoRepository;

    public static void createService(Toko toko) {
        tokoRepository.save(toko);
    }

    public static List<Toko> listToko() {
        return tokoRepository.findAll();
    }
    
}
