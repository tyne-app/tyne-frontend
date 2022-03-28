export interface ReservationAdd {
    branch_id: number;
    people: number;
    date: Date;
    hour: string;
    products: Product[];
}

export interface Product {
    id: number;
    quantity: number;
}
