export interface ReservationPayment {
    reservation_id: number;
    payment_id: string;
    payment_number: string;
    url_payment: string;
    status: number;
  }
  
  export type CreateReservationPaymentDto = Omit<ReservationPayment, "status">;
  
  export type UpdateReservationPaymentDto = Omit<ReservationPayment, "url_payment">;