import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './productinfo/productinfo.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';




@NgModule({
  declarations: [
    ProductInfoComponent,
    AddressComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
