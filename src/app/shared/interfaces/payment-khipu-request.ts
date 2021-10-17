export interface PaymentKhipuRequest {
  // Descripción de la transacción
  subject: string;
  // Monedas disponibles CLP, USD, ARS, BOB
  currency: string;
  // Monto
  ammount: number;
}
