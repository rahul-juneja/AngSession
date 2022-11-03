import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RahulComponent } from './rahul/rahul.component';
import { DibyaComponent } from './dibya/dibya.component';
import { SangramComponent } from './sangram/sangram.component';



@NgModule({
  declarations: [
    RahulComponent,
    DibyaComponent,
    SangramComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ColabModule { }
