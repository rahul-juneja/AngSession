import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RahulComponent } from './rahul/rahul.component';
import { DibyaComponent } from './dibya/dibya.component';



@NgModule({
  declarations: [
    RahulComponent, 
    DibyaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ColabModule { }
