export interface BusinessProfileResponse {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  accept_pet: boolean;
  address: string;
  rating: number;
  price: number;
  related_branch: [];
  branch_images: BranchImage[];
  opinion_list: Opinion[];
  schedule_list: Schedule[];
}

export interface BranchImage {
  id: number;
  url: string;
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
  id: number;
  closing_hour: string;
  day: number;
  opening_hour: string;
}
