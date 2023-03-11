import { ResourceModel } from "../../shared/models/generic-model";

export class Product extends ResourceModel<Product> {
  public productName?: string;
  public productDetails?: string;
  public price!: number
  public categoryName!: string
  public img!: {
    url: string
    name: string
  }

  constructor(product?: Partial<Product>) {
    super(product);
  }

}