import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ColabModule } from './colab/colab.module';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { HeaderComponent } from './webpage/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColabModule,
    UsersModule,
    ProductModule,
    CartModule
  ],
  providers: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
