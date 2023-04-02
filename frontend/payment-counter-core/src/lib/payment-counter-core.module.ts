import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentItemComponent } from './component/payment-item/payment-item.component';
import { CardModule } from 'primeng/card';
import { PaymentListComponent } from './component/payment-list/payment-list.component';
import { PaymentFormComponent } from './component/payment-form/payment-form.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  imports: [
    CommonModule,
    CardModule,
    InputNumberModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
  declarations: [
    PaymentItemComponent,
    PaymentListComponent,
    PaymentFormComponent,
  ],
  exports: [PaymentItemComponent, PaymentListComponent, PaymentFormComponent],
})
export class PaymentCounterCoreModule {}
