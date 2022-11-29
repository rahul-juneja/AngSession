import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from '../product/productinfo/productinfo.component';
import { AddressComponent } from './address/address.component';
import { WishlistComponent } from '../product/wishlist/wishlist.component';
import { CartRoutingModule } from './cart-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentinfoComponent } from './paymentinfo/paymentinfo.component';




@NgModule({
  declarations: [
    ProductInfoComponent,
    AddressComponent,
    WishlistComponent,
    PaymentinfoComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
