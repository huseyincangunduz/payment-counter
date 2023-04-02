import { Component, Input } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { IPayment } from '../../models/payment.model';
import { PaymentService } from '../../service/payment.service';

@Component({
  selector: 'payment-counter-payment-item',
  templateUrl: './payment-item.component.html',
  styleUrls: ['./payment-item.component.scss'],
})
export class PaymentItemComponent {
  @Input() payment?: IPayment;

  constructor(
    private confirmDialServ: ConfirmationService,
    private paymentService: PaymentService
  ) {}

  removeRequest() {
    this.confirmDialServ.confirm({
      header: 'Bu ödemeyi silmekten emin misiniz',
      acceptLabel: 'Sil',
      rejectLabel: 'İptal',
      accept: () => {
        this.paymentService.removePayment(this.payment!.id!).subscribe(() => {
          this.payment = undefined;
        });
      },
    });
  }
}
