export interface LocalReservationsResponse {
  total_items: number;
  page: number;
  total_items_page: number;
  total_pages: number;
  local_reservations_date: LocalReservationsDate[];
}

export interface LocalReservationsDate {
  reservation_date: Date;
  reservation_week_day: string;
  reservation_attended: number;
  reservation_confirmed: number;
  reservation_canceled: number;
  reservation_pending: number;
  local_reservations: LocalReservations[];
}

export interface LocalReservations {
  reservation_id: number;
  name: string;
  last_name: string;
  preference: string;
  reservation_date: Date;
  reservation_date_status: Date;
  hour: string;
  people: number;
  status_id: number;
  status_description: string;
  street: string;
  street_number: number;
  state: string;
  city: string;
  country: string;
}
