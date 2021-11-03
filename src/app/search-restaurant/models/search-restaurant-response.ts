export interface SearchRestaurantResponse {
  branch_id: number;
  state_name: string;
  state_id: number;
  restaurant_name: string;
  description: string;
  rating: number;
  min_price: number;
  max_price: number;
  url_image: string;
  isFavorite: boolean; // ?
}
