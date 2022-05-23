export interface Branch {
  accept_pet: boolean;
  restaurant_name: string;
  state_name: string;
  latitude: number;
  longitude: number;
  id: number;
  manager_id: number;
  name: string;
  phone: string;
  state_id: number;
  street: string;
  street_number: number;
}

export type CreateBranchDto = Pick<Branch, "name" | "street" | "street_number" | "state_id" | "accept_pet">;
export type FindBranchOfRestaurantDto = Pick<
  Branch,
  "id" | "name" | "street" | "street_number" | "phone" | "accept_pet"
>;
export type FindBranchOfBusinessDto = Omit<Branch, "name" | "state_id" | "accept_pet" | "phone">;
