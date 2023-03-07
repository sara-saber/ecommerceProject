import { ProductService } from './../../../products/services/product.service';
import { CartItem } from './../../models/cartItem';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/products/models/product';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shoping-cart-table',
  templateUrl: './shoping-cart-table.component.html',
  styleUrls: ['./shoping-cart-table.component.scss']
})
export class ShopingCartTableComponent implements OnInit {
  cart:Cart=new Cart()

  ngOnInit(): void {
  }
  constructor(private cartService:CartService,private rout:Router,private productService:ProductService){
  this.cart= this.cartService.getCart()
  }
  removeItem(product:Product){
   this.cart= this.cartService.removeFromCart(product)
   this.cartService.ChangeTotalPrice(this.cartService.getCart().totalPrice)
  }
  increase(quantity:number)
  {
    console.log(quantity)
  }
  
}
