export interface ClientReservation {
  id: number;
  branch_name: string;
  people: number;
  reservation_date: Date;
  hour: string;
  amount: number;
  branch_street_address: string;
  branch_street_number: string;
  url_image: string;
}
