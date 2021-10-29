export interface BusinessRegistrationDto {
  manager: Manager;
  legal_representative: Representative;
  branch: Branch;
  restaurant: Restaurant;
  branch_bank: BankRestaurant;
}

export interface Manager {
  name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
}

export interface Representative {
  name: string;
  last_name: string;
  identifier: string;
  phone: string;
  email: string;
}

export interface Branch {
  name: string;
  street: string;
  street_number: number;
  state_id: number;
  accept_pet: boolean;
}

export interface Restaurant {
  identifier: string;
  social_reason: string;
  commercial_activity: string;
  phone: string;
  street: string;
  street_number: number;
  state_id: number;
}

export interface BankRestaurant {
  account_holder_identifier: string;
  account_holder_name: string;
  account_number: string;
  account_type: string;
  bank_id: number;
}
