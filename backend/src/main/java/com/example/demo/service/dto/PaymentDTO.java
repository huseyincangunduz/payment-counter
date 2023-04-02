package com.example.demo.service.dto;

import jakarta.persistence.Id;

import java.time.ZonedDateTime;

public class PaymentDTO {
    private Long id;
    private Long price;
    private ZonedDateTime dateTime;
    private String soldItem;

    public String getSoldItem() {
        return soldItem;
    }

    public PaymentDTO setSoldItem(String soldItem) {
        this.soldItem = soldItem;
        return this;
    }

    public Long getId() {
        return id;
    }

    public PaymentDTO setId(Long id) {
        this.id = id;
        return this;
    }

    public Long getPrice() {
        return price;
    }

    public PaymentDTO setPrice(Long price) {
        this.price = price;
        return this;
    }

    public ZonedDateTime getDateTime() {
        return dateTime;
    }

    public PaymentDTO setDateTime(ZonedDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
}
