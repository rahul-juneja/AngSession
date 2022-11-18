import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductInfoComponent } from './productinfo/productinfo.component';
import { KidboysComponent } from './products/kidboys/kidboys.component';
import { KidgirlComponent } from './products/kidgirl/kidgirl.component';
import { MenComponent } from './products/men/men.component';
import { WomenComponent } from './products/women/women.component';
import { WishlistComponent } from './wishlist/wishlist.component';




const routes: Routes = [
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: "kidboys", component: KidboysComponent },
  { path: "kidgirls", component: KidgirlComponent },
  { path: 'productinfo', component: ProductInfoComponent },
  { path: 'wishlist', component: WishlistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
