import { CreateProduct } from "./product";

export interface CreateMenuDto {
  menu: Menu[];
} 
export interface Menu {
  category_id: number ;
  products: CreateProduct[];
}
