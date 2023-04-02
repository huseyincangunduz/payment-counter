import { Component, OnInit } from '@angular/core';
import { IPayment } from '../../models/payment.model';
import { PaymentService } from '../../service/payment.service';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
@Component({
  selector: 'payment-counter-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent implements OnInit {
  payment?: IPayment;

  constructor(
    private srv: PaymentService,
    private dialogReference: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  editTitle(title: string) {
    if (this.config) {
      this.config.header = title;
    }
  }

  ngOnInit(): void {
    if (this.config.data) {
      this.payment = this.config.data as IPayment;
      this.editTitle('Ödemeyi düzenle');
    } else {
      this.payment = {
        price: 0,
        dateTime: new Date().toISOString(),
        soldItem: '',
      };
      this.editTitle('Yeni ödeme ekle');
    }
  }

  sendPrice() {
    this.srv.addPayment(this.payment!).subscribe(() => {
      this.dialogReference.close();
    });
  }
}
