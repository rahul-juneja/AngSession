import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenComponent } from './products/men/men.component';
import { KidboysComponent } from './products/kidboys/kidboys.component';
import { KidgirlComponent } from './products/kidgirl/kidgirl.component';
import { WomenComponent } from './products/women/women.component';



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
