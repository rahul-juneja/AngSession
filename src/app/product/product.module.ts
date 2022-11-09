import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';



@NgModule({
  declarations: [
    MenComponent,
    WomenComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
   MenComponent,
    WomenComponent

  ]
})
export class ProductModule { }
