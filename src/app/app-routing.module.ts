import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { SettingsComponent } from './profile-section/settings/settings.component';
import { HeaderComponent } from './webpage/header/header.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'cart', component:CartComponent},
  {path:"setting",component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
