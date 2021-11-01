export interface MenuAdd {
    menu: Menu[];
}

export interface Menu {
    category: Category;
    products: Product[];
}

export interface Category {
    id: string;
    name: string;
}

export interface Product {
    name: string;
    description: string;
    url_image: string;
    amount: string;
    commission_tyne: string;
}
