package com.example.demo.service;

import com.example.demo.repo.PaymentRepository;
import com.example.demo.service.dto.PaymentDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final PaymentMapper paymentMapper;

    public PaymentService(PaymentRepository paymentRepository, PaymentMapper paymentMapper) {
        this.paymentRepository = paymentRepository;
        this.paymentMapper = paymentMapper;
    }

    public Optional<PaymentDTO> findById(Long id) {
        return paymentRepository.findById(id).map(this.paymentMapper::toDto);
    }


    public List<PaymentDTO> findAll() {
        return this.paymentMapper.toDto(this.paymentRepository.findAll()).stream().toList();
    }

    public PaymentDTO save(PaymentDTO paymentDTO) {
        return this.paymentMapper.toDto(this.paymentRepository.save(this.paymentMapper.toEntity(paymentDTO)));
    }

    public void delete(Long id) {
        this.paymentRepository.deleteById(id);
    }

}
