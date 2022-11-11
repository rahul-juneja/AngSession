import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './productinfo/productinfo.component';
import { AddressComponent } from './address/address.component';




@NgModule({
  declarations: [
    ProductInfoComponent,
    AddressComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
