import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from './src/app/modules/shared/services/resource.service';
import { Product } from './src/app/modules/products/models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService extends ResourceService<Product>{
  constructor(http:HttpClient) {
    super(http,Product,'https://63dacb542af48a60a7d5eac3.mockapi.io/products');
   }
}
