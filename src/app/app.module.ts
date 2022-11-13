import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { CartComponent } from './cart/cart/cart.component';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { FooterComponent } from './webpage/footer/footer.component';
import { HeaderComponent } from './webpage/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CartModule,
    UsersModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
