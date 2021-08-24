export interface BusinessRegistrationDto {
  legal_representative: Representative[];
  branch: Branch;
  restaurant: Restaurant;
  bank_restaurant: BankRestaurant;
}

export interface Representative {
  name: string;
  last_name: string;
  identifier: string;
  phone: string;
  email: string;
  password: string;
  type_legal_representative_id: number;
}

export interface Branch {
  name: string;
  accept_pet: boolean;
  commercial_activity: string;
  address: string;
  state_id: number;
}

export interface Restaurant {
  identifier: string;
  name: string;
  address: string;
  state_id: number;
}

export interface BankRestaurant {
  account_holder_identifier: string;
  account_holder: string;
  account_number: string;
  account_type: string;
  bank_id: number;
}
