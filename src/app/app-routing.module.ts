import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { MenComponent } from './product/products/men/men.component';
import { HeaderComponent } from './webpage/header/header.component';
import { MainComponent } from './webpage/main/main.component';

import { ProductInfoComponent } from './product/productinfo/productinfo.component';

import { AddressComponent } from './cart/address/address.component';
import { PaymentComponent } from './cart/payment/payment.component';
import { WishlistComponent } from './product/wishlist/wishlist.component';
import { WomenComponent } from './product/products/women/women.component';
import { KidboysComponent } from './product/products/kidboys/kidboys.component';
import { KidgirlComponent } from './product/products/kidgirl/kidgirl.component';
import { SettingsComponent } from './users/settings/settings.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: 'cart', component: CartComponent },
  { path: "setting", component: SettingsComponent },
  { path: "kidboys", component: KidboysComponent },
  { path: "kidgirl", component: KidgirlComponent },
  { path: 'productinfo', component: ProductInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'address', component: AddressComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
