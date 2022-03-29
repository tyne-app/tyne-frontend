export interface Branch{
    branch_id: number;
    name: string;
    street: string;
    street_number: number;
    state_id: number;
    accept_pet: boolean;
    phone: string;
    restaurant_name: string;
    state_name: string;
    latitude: number;
    longitude: number;
}

export type CreateBranchDto = Pick<Branch, 
    "name" | "street" | "street_number" | "state_id" | "accept_pet" >
export type FindBranchOfRestaurantDto = Pick<Branch, 
    "name" | "street" | "street_number" | "phone" | "accept_pet" >
export type FindBranchOfBusinessDto = Omit<Branch, 
    "name" | "state_id" | "accept_pet" | "phone">

