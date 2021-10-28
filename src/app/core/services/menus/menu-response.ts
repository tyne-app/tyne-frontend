export interface MenuData {
    data: Data;
}

export interface Data {
    sections:     Section[];
    branch_id:    number;
    nombre_local: string;
    rango_precio: RangoPrecio;
    rating:       number;
}

export interface RangoPrecio {
    max: number;
    min: number;
    avg: number;
}

export interface Section {
    category: Category;
    products: Product[];
}

export interface Category {
    id:   number;
    name: string;
}

export interface Product {
    id:              number;
    name:            string;
    description:     string;
    url_image:       string;
    amount:          number;
    commission_tyne: number;
}
