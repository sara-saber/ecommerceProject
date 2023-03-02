import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from '../../shared/services/resource.service';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ResourceService<Category> {
  constructor(http:HttpClient) {
    super(http,Category,'https://63dacb542af48a60a7d5eac3.mockapi.io/category');
   }
}
