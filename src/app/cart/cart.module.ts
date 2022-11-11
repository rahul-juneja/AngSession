import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './productinfo/productinfo.component';
import { PaymentComponent } from './payment/payment.component';




@NgModule({
  declarations: [
    ProductInfoComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
