import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './settings/settings.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SettingsComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
