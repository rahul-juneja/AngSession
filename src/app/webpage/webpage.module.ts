import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from '../main/main.component';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class WebpageModule { }
