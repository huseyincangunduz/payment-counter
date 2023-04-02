package com.example.demo.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.math.BigDecimal;
import java.time.ZonedDateTime;

@Entity
public class Payment {
    @Id
    // generated value otomatik olarak yeni id oluşturmasını sağlar
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long price; // 1€ = 1000
    private ZonedDateTime dateTime;
    private String soldItem;

    // Java projeleri için Getter ve Setters gereklidir.
    // ama "lombok" ile kolayca yapılabilir
    // ama projeyi karmaşık hale getirmek istemiyorum

    public String getSoldItem() {
        return soldItem;
    }

    public Payment setSoldItem(String soldItem) {
        this.soldItem = soldItem;
        return this;
    }

    public Long getId() {
        return id;
    }

    public Payment setId(Long id) {
        this.id = id;
        return this;
    }

    public Long getPrice() {
        return price;
    }

    public Payment setPrice(Long price) {
        this.price = price;
        return this;
    }

    public ZonedDateTime getDateTime() {
        return dateTime;
    }

    public Payment setDateTime(ZonedDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
}
