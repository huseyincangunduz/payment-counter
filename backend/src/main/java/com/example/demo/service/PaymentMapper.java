package com.example.demo.service;

import com.example.demo.domain.Payment;
import com.example.demo.service.dto.PaymentDTO;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class PaymentMapper {
    public PaymentDTO toDto(Payment entity) {
        return new PaymentDTO().setDateTime(entity.getDateTime())
                .setId(entity.getId()).setPrice(entity.getPrice()).setSoldItem(entity.getSoldItem());
    }

    public Payment toEntity(PaymentDTO dto) {
        return new Payment().setDateTime(dto.getDateTime()).setId(dto.getId()).setPrice(dto.getPrice())
                .setSoldItem(dto.getSoldItem());
    }

    public Collection<PaymentDTO> toDto(Collection<Payment> entity) {
        return entity.stream().map(this::toDto).toList();
    }

    public Collection<Payment> toEntity(Collection<PaymentDTO> dto) {
        return dto.stream().map(this::toEntity).toList();
    }
}
