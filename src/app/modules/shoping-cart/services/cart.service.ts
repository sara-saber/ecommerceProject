import { Injectable } from '@angular/core';
import { Product } from '../../products/models/product';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart = new Cart()
  addToCart(product: Product) {
    let carditem = this.cart.items.find(x => x.product.id === product.id)
    if (carditem) {
      carditem.quantity += 1
      return
    }
    this.cart.items.push(new CartItem(product))
  }
  removeFromCart(product: Product) {
   this.cart.items= this.cart.items.filter(x=>x.product.id!=product.id)
  }
  getCart(): Cart {
    return this.cart
  }
}
