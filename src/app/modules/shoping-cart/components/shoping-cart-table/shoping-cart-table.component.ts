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
  constructor(private cartService:CartService){
  this.cart= this.cartService.getCart()
  }
  removeItem(product:Product){
    this.cartService.removeFromCart(product)
  }
}
