export interface MenuResponse {
  category: Category;
  menu: Menu[];
}

export interface Category {
  id: number;
  name: string;
}

export interface Menu {
  id: number;
  product: Product;
  quantity: number; // special
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: Price[];
  image_product: ImageProduct[];
}

export interface Price {
  amount: number;
  comision_tyne: number;
}

export interface ImageProduct {
  image: Image;
}

export interface Image {
  id: number;
  url: string;
}
