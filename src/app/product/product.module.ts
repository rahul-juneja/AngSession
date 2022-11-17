import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenComponent } from './products/men/men.component';
import { KidboysComponent } from './products/kidboys/kidboys.component';
import { KidgirlComponent } from './products/kidgirl/kidgirl.component';
import { WomenComponent } from './products/women/women.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MenComponent,
    WomenComponent,
    KidboysComponent,
    KidgirlComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
   MenComponent,
    WomenComponent

  ]
})
export class ProductModule { }
