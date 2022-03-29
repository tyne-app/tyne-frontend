export interface Product {
    id: number;
    name: string;
    description: string;
    url_image: string;
    amount: number;
}

export type CreateProduct = Omit< Product,"id"> 