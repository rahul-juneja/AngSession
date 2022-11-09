import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidboysComponent } from './kidboys/kidboys.component';
import { KidgirlComponent } from './kidgirl/kidgirl.component';



@NgModule({
  declarations: [
    MenComponent,
    WomenComponent,
    KidboysComponent,
    KidgirlComponent
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
