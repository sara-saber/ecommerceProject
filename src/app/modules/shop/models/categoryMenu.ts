import { Category } from "../../categories/models/category";

export class CategoryMenu{

    category:Category=new Category

    name:string=""
    get routerLink()
    {
        return "shop/"+this.category.categoryName
    }
}