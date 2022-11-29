import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentinfoComponent } from './paymentinfo/paymentinfo.component';




const routes: Routes = [
  { path: '', component: CartComponent },
  { path: 'address', component: AddressComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'paymentinfo', component:PaymentinfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
