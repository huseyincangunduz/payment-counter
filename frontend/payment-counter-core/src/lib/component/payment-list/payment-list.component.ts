import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { IPayment } from '../../models/payment.model';
import { PaymentService } from '../../service/payment.service';
import { PaymentFormComponent } from '../payment-form/payment-form.component';

@Component({
  selector: 'payment-counter-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss'],
})
export class PaymentListComponent implements OnInit {
  payments: IPayment[] = [];

  constructor(
    private paymentsService: PaymentService,
    private dialogService: DialogService
  ) {}

  showAddDialog() {
    const dialogReference = this.dialogService.open(PaymentFormComponent, {});
    dialogReference.onClose.subscribe(() => {
      this.fetchPayments();
    });
  }

  ngOnInit(): void {
    this.fetchPayments();
  }

  private fetchPayments() {
    this.paymentsService.fetchPayments().subscribe((a) => {
      this.payments = a;
    });
  }
}
