import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { SettingsComponent } from './profile-section/settings/settings.component';
import { MenComponent } from './product/men/men.component';
import { WomenComponent } from './product/women/women.component';
import { HeaderComponent } from './webpage/header/header.component';
import { MainComponent } from './main/main.component';
import { KidboysComponent } from './product/kidboys/kidboys.component';
import { KidgirlComponent } from './product/kidgirl/kidgirl.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  { path : 'men',component : MenComponent},
  {path:'women',component:WomenComponent},
  {path:'cart', component:CartComponent},
  {path:"setting",component:SettingsComponent},
  {path:"kidboy",component:KidboysComponent},
  {path:"kidgirl",component:KidgirlComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
