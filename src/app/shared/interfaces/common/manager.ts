export interface Manager {
    name: string;
    last_name: string;
    phone: string;
    email: string;
    password: string;
    identifier: string;
}

export type CreateManagerDto = Omit<Manager, "identifier">
export type FindManagerOfRestaurantDto = Omit<Manager, "password">

