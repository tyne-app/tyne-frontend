import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PaymentCreateResponse } from "@app/shared/interfaces/payment-create-response";
import { PaymentKhipuRequest } from "@app/shared/interfaces/payment-khipu-request";
import { Observable } from "rxjs";

// TODO: Eliminar
@Injectable({
  providedIn: "root",
})
export class PaymentService {
  private urlBase = "URL-API";
  public constructor(private httpClient: HttpClient) {}

  public getPaymentKhipuRequest(paymentKhipuRequest: PaymentKhipuRequest): Observable<PaymentCreateResponse> {
    return this.httpClient.post<PaymentCreateResponse>(
      `${this.urlBase}v1/method-payments-khipu/payments/`,
      paymentKhipuRequest
    );
  }
}
