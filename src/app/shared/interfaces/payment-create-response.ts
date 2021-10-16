export interface PaymentCreateResponse {
  payment_id: string;
  payment_url: string;
  simplified_transfer_url: string;
  transfer_url: string;
  webpay_url: string;
  hites_url: string;
  payme_url: string;
  app_url: string;
  ready_for_terminal: boolean;
}
