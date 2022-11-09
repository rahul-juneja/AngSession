import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RahulComponent } from './rahul/rahul.component';
import { DibyaComponent } from './dibya/dibya.component';
import { ChikuComponent } from './chiku/chiku.component';
import { BedrajComponent } from './bedraj/bedraj.component';
import { SangramComponent } from './sangram/sangram.component';
import { CartComponent } from '../cart/cart/cart.component';



@NgModule({
  declarations: [
    RahulComponent,
    DibyaComponent,
    BedrajComponent,
    ChikuComponent,
    SangramComponent,
    CartComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ColabModule { }
