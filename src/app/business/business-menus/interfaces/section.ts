import { Category } from "./category";
import { Product } from "./product";

export interface Section {
    category: Category;
    products: Product[];
}
