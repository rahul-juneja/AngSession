import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RahulComponent } from './rahul/rahul.component';
import { ChikuComponent } from './chiku/chiku.component';
import { DibyaComponent } from './dibya/dibya.component';



@NgModule({
  declarations: [
    RahulComponent,
    ChikuComponent,
    DibyaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ColabModule { }
