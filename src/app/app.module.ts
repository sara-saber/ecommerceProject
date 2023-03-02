import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopingCartComponent } from './modules/shoping-cart/components/shoping-cart/shoping-cart.component';
import { ShopingCheckoutComponent } from './modules/shoping-cart/components/shoping-checkout/shoping-checkout.component';
import { ShopingDiscountComponent } from './modules/shoping-cart/components/shoping-discount/shoping-discount.component';
import { ShopingCartTableComponent } from './modules/shoping-cart/components/shoping-cart-table/shoping-cart-table.component';
import { SharedModule } from './modules/shared/shared.module';

import { SidebarComponent } from './modules/shop/components/sidebar/sidebar/sidebar.component';
import { ShopComponent } from './modules/shop/shop.component';
import { HomeComponent } from './modules/home/components/home.component';

@NgModule({
  declarations: [
    AppComponent,
   HomeComponent,
    ShopingCartComponent,
    ShopingCheckoutComponent,
    ShopingDiscountComponent,
    ShopingCartTableComponent,
    SidebarComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
