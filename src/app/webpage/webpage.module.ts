import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { UsersModule } from './users/users.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class WebpageModule { }
