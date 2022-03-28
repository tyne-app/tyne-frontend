export interface SearchRestaurantRequest {
  name: string;
  dateReservation: string;
  state: number;
  orderBy?: number;
  sortBy?: number;
  page: number;
  result_for_page: number;
}
