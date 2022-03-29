import { FindBranchOfRestaurantDto as Branch } from "../common/branch";
import { FindManagerOfRestaurantDto as Manager} from "../common/manager";

export interface RestaurantAccount {
  branch: Branch;
  manager: Manager;
  image_list: ImageList[];
  schedule_list: ScheduleList[];
}

export interface ImageList {
  url_image: string;
  id: number;
}

export interface ScheduleList {
  id: number;
  opening_hour: string;
  closing_hour: string;
  active: boolean;
  day: number;
}
