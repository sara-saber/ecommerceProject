import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home.component';
import { ShopComponent } from './modules/shop/shop.component';

import { ShopingCartComponent } from './modules/shoping-cart/components/shoping-cart/shoping-cart.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  {
    component:ShopingCartComponent,
    path:'cart'
  },
  {
    component:ShopComponent,
    path:'shop'
  },
  {
    component:ShopComponent,
    path:'shop/:category'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
