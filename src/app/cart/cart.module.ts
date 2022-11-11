import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './productinfo/productinfo.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { WishlistComponent } from './wishlist/wishlist.component';




@NgModule({
  declarations: [
    ProductInfoComponent,
    AddressComponent,
    PaymentComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
