import { BankRestaurant } from "@app/shared/interfaces/common/bank-restaurant";
import { CreateBranchDto as Branch } from "@app/shared/interfaces/common/branch";
import { CreateManagerDto as Manager } from "@app/shared/interfaces/common/manager";
import { Restaurant } from "@app/shared/interfaces/restaurant/restaurant";

export interface BusinessRegistrationDto {
  manager: Manager;
  legal_representative: Representative;
  branch: Branch;
  restaurant: Restaurant;
  branch_bank: BankRestaurant;
}

export interface Representative {
  name: string;
  last_name: string;
  identifier: string;
  phone: string;
  email: string;
}



