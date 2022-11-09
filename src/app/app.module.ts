import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ColabModule } from './colab/colab.module';
import { MainComponent } from './main/main.component';
import { ProductModule } from './product/product.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColabModule,
    ProductModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
