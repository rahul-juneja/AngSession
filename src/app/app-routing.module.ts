import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpageComponent } from './cart/cartpage/cartpage.component';
import { WomenComponent } from './cart/women/women.component';
import { HeaderComponent } from './webpage/header/header.component';
import { LoginComponent } from './webpage/login/login.component';
import { RegisterComponent } from './webpage/register/register.component';
import { SangeetaComponent } from './webpage/sangeeta/sangeeta.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'sangeeta',component:SangeetaComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path : 'cartpage',component : CartpageComponent

  },
  {path:'women',component:WomenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
