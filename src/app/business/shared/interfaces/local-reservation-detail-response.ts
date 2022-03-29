export interface LocalReservationDetailResponse {
  people: number;
  street: string;
  street_number: number;
  state: string;
  city: string;
  country: string;
  preference: string;
  reservation_date: string;
  reservation_week_day: string;
  hour: string;
  total_price: number;
  name: string;
  last_name: string;
  payment_id: string;
  reservation_detail: ReservationDetail[];
}

export interface ReservationDetail {
  category_id: number;
  name_product: string;
  product_description: string;
  product_amount: number;
  product_quantity: number;
}
