import { BankRestaurant } from "@app/shared/interfaces/common/bank-restaurant";
import { CreateBranchDto as Branch} from "@app/shared/interfaces/common/branch";
import { CreateManagerDto as Manager } from "@app/shared/interfaces/common/manager";

export interface BranchRegistrationDto {
  manager: Manager;
  branch: Branch;
  branch_bank: BankRestaurant;
}

