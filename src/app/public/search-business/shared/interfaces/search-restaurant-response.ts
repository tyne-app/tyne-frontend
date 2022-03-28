export interface SearchRestaurantResponse {
  total_items: number;
  total_items_page: number;
  page: number;
  data: SearchRestaurant[];
}

export interface SearchRestaurant {
  branch_id: number;
  state_name: string;
  street: string;
  street_number: number;
  state_id: number;
  restaurant_name: string;
  description: string;
  rating: number;
  min_price: number;
  max_price: number;
  url_image: string;
  isFavorite: boolean;
}
