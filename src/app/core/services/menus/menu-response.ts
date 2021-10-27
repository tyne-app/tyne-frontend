export interface MenuResponse {
  sections: Section[];
  branch_id: number;
  nombre_local: string;
  rating: null;
  rango_precio: RangePrice;
}

export interface RangePrice {
  max: number;
  min: number;
  avg: number;
}

export interface Section {
  category: Category;
  products: Product[];
}

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  url_image: string;
  amount: number;
  commission_tyne: number;
}
