export interface SearchRestaurantRequest {
  name: string;
  dateReservation: string;
  state: number;
  sortBy?: number;
  orderBy?: number;
}
