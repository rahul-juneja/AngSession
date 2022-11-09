import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
