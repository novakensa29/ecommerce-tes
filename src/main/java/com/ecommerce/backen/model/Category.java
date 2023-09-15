package com.ecommerce.backen.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "category")
public class Category {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "category_name")
    private String categoryName;

    // Getter untuk id
    public Integer getId() {
        return id;
    }

    // Setter untuk id
    public void setId(Integer id) {
        this.id = id;
    }

    // Getter untuk categoryName
    public String getCategoryName() {
        return categoryName;
    }

    // Setter untuk categoryName
    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
}
