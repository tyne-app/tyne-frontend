import { FindBranchOfBusinessDto as Branch } from "@app/shared/interfaces/common/branch";
export { FindBranchOfBusinessDto as Branch } from "@app/shared/interfaces/common/branch";

export interface BusinessDetailsResponse {
  id: number;
  description: string;
  latitude: number;
  longitude: number;
  street: string;
  street_number: number;
  accept_pet: boolean;
  name: string;
  state_name: string;
  rating: number;
  avg_price: number;
  min_price: number;
  max_price: number;
  branches: Branch[];
  images: Image[];
  schedule: Schedule[];
  opinions: any[];
}

export interface Image {
  id: number;
  url_image: string;
}

export interface Opinion {
  id: number;
  description: string;
  qualification: number;
  creation_date: Date;
  name: string;
  last_name: string;
}

export interface Schedule {
  active: boolean;
  opening_hour: string;
  branch_id: number;
  closing_hour: string;
  id: number;
  day: number;
}
