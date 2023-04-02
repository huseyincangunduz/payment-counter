package com.example.demo.rest;

import com.example.demo.service.PaymentService;
import com.example.demo.service.dto.PaymentDTO;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
public class PaymentController {
    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("payment")
    public PaymentDTO addPayment(@RequestBody PaymentDTO paymentDTO) {
        return this.paymentService.save(paymentDTO);
    }

    @DeleteMapping("payment/{id}")
    public void deletePayment(@PathVariable Long id) {
        this.paymentService.delete(id);
    }

    @GetMapping("payment")
    public List<PaymentDTO> getPayment() {
        return this.paymentService.findAll();
    }

    @GetMapping("payment/{id}")
    public Optional<PaymentDTO> getPaymentById(@PathVariable Long id) {
        return this.paymentService.findById(id);
    }

}
