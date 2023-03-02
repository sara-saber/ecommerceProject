import { ResourceModel } from "../../shared/models/generic-model";

export class Category extends ResourceModel<Category> {
    public categoryName?: string;
    constructor(category?: Partial<Category>) {
      super(category);
    }
  }