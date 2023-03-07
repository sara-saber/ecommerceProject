import { Product } from "../../products/models/product";

export class CartItem{
    constructor(product:Product){
        this.product=product
    }
   // product:Product=new Product()

    product:Product
    quantity:number=0

    get total():number{
        return this.product.price * this.quantity
    }
}