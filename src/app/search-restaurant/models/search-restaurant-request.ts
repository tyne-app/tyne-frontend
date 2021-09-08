export interface SearchRestaurantRequest {
  name: string;
  dateReservation: string;
  state: number;
  orderBy?: number;
  sortBy?: number;
}
