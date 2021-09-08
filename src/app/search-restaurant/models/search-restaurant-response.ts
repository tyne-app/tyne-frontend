export interface SearchRestaurantResponse {
  id: number;
  name: string;
  image_url: string;
  price: number;
  rating: number;
  description: string;
  isFavorite: boolean;
}
