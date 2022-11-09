import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartpageComponent } from './cartpage/cartpage.component';
import { WomenComponent } from './women/women.component';



@NgModule({
  declarations: [
    CartpageComponent,
    WomenComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartpageComponent,
    WomenComponent

  ]
})
export class CartModule { }
