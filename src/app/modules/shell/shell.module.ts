import { SharedModule } from './../shared/shared.module';
import { ShopDetailsComponent } from './components/shop_details/shop-details.component';
import { ShopComponent } from './components/shop/shop.component';
import { HomeComponent } from './components/home/components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { HumbergerComponent } from './components/header/components/humberger/humberger.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/components/footer/footer.component';
import { ShopingCartComponent } from './components/shoping-cart/components/shoping-cart/shoping-cart.component';
import { ShopingCheckoutComponent } from './components/shoping-cart/components/shoping-checkout/shoping-checkout.component';
import { ShopingDiscountComponent } from './components/shoping-cart/components/shoping-discount/shoping-discount.component';
import { ShopingCartTableComponent } from './components/shoping-cart/components/shoping-cart-table/shoping-cart-table.component';
import { ProductDetailsComponent } from './components/shop_details/components/product-details/product-details.component';
import { RelatedProductsComponent } from './components/shop_details/components/related-products/related-products.component';
import { BreadcrumbComponent } from './components/shop_details/components/breadcrumb/breadcrumb.component';
import { SidebarComponent } from './components/shop/components/sidebar/sidebar/sidebar.component';

@NgModule({

  declarations: [
    ShellComponent,
    HumbergerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopingCartComponent,
    ShopingCartTableComponent,
    ShopingCheckoutComponent,
    ShopingDiscountComponent,
    SidebarComponent,
    ShopComponent,
    ShopDetailsComponent,
    ProductDetailsComponent,
    RelatedProductsComponent,
    BreadcrumbComponent
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShellRoutingModule
  ]
})
export class ShellModule { }
