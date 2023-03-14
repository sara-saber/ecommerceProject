import { DetailsService } from './components/shop_details/services/details.service';
import { ShopingCartComponent } from './components/shoping-cart/components/shoping-cart/shoping-cart.component';
import { CardComponent } from './../shared/components/card/card.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/components/home/home.component';
import { ShopDetailsComponent } from './components/shop_details/shop-details.component';

const routes: Routes = [
  {
    path: 'shop-details',
    component: ShopDetailsComponent
  },
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'cart',
    component: ShopingCartComponent

  },
  {
    path:'details/:id',
    component:ShopDetailsComponent,
    //resolve:DetailsService
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
