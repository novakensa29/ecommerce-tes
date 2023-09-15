package com.ecommerce.backen.model;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "Toko")
public class Toko {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private @NotNull String namaToko;
    private @NotNull String alamat;
    private @NotNull Integer rating;
    private @NotNull Integer waktuProses;
    private @NotNull String ulasan;
    public Toko() {
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getNamaToko() {
        return namaToko;
    }
    public void setNamaToko(String namaToko) {
        this.namaToko = namaToko;
    }
    public String getAlamat() {
        return alamat;
    }
    public void setAlamat(String alamat) {
        this.alamat = alamat;
    }
    public Integer getRating() {
        return rating;
    }
    public void setRating(Integer rating) {
        this.rating = rating;
    }
    public Integer getWaktuProses() {
        return waktuProses;
    }
    public void setWaktuProses(Integer waktuProses) {
        this.waktuProses = waktuProses;
    }
    public String getUlasan() {
        return ulasan;
    }
    public void setUlasan(String ulasan) {
        this.ulasan = ulasan;
    }
}
