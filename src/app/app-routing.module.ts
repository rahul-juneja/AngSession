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
import { AuthGuard } from './users/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent, canActivate:[AuthGuard] },
  { 
    path: 'cart', 
    loadChildren: ()=> import('./cart/cart.module')
    .then(m=>m.CartModule), 
    canActivate:[AuthGuard]
  },
  { 
    path: 'product', 
    loadChildren: ()=> import('./product/product.module')
    .then(m=>m.ProductModule), 
    canActivate:[AuthGuard]
  },
  { 
    path: 'user', 
    loadChildren: ()=> import('./users/users.module')
    .then(m=>m.UsersModule)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
