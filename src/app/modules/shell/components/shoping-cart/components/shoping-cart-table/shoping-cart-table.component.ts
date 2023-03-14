import { ProductService } from './../../../../../../../../product.service';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/products/models/product';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-shoping-cart-table',
  templateUrl: './shoping-cart-table.component.html',
  styleUrls: ['./shoping-cart-table.component.scss']
})
export class ShopingCartTableComponent implements OnInit {
  cart: Cart = new Cart()

  ngOnInit(): void {
  }
  constructor(private cartService: CartService, private rout: Router, private productService: ProductService) {
    this.cart = this.cartService.getCart()
  }
  removeItem(product: Product) {
    this.cart = this.cartService.removeFromCart(product)
    this.updateTotal()
  }
  increase(item: CartItem) {
    item.quantity += 1
    this.updateTotal()
  }
  decrease(item: CartItem) {
    item.quantity -= 1
    item.quantity?0:this.removeItem(item.product)
    this.updateTotal()
  }
  updateTotal() {
    this.cartService.ChangeTotalPrice(this.cartService.getCart().totalPrice)

  }

}
