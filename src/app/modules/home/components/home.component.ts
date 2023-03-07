import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/modules/categories/models/category';
import { CategoryService } from 'src/app/modules/categories/services/category.service';
import { Product } from 'src/app/modules/products/models/product';
import { ProductService } from 'src/app/modules/products/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  IProducts?:Product[]
  ICategory:Category[]=[]
  constructor(private productService:ProductService,private categoryService:CategoryService){
    this.categoryService.getAll().subscribe(
      (res:Category[])=>this.ICategory=res,
      (err:any)=>console.log(err)
    )
  }
  ngOnInit(): void {
   
   this.productService.getAll().subscribe(
    (res:Product[])=>this.IProducts=res,
    (err:any)=>console.log(err)
   )
  }

  getCategory(categoryId:string){
  const categoryName='col-lg-3 col-md-4 col-sm-6 mix '+this.ICategory?.find(x=>categoryId==x.categoryName)
  return categoryName
  }
 
  
}
