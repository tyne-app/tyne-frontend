import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "@src/environments/environment";
import { PaymentKhipuRequest } from "../interfaces/payment-khipu-request";
import { PaymentCreateResponse } from "../interfaces/payment-create-response";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  private endpoint = environment.apiPayments;
  public constructor(private httpClient: HttpClient) {}

  public getPaymentKhipuRequest(paymentKhipuRequest: PaymentKhipuRequest): Observable<PaymentCreateResponse> {
    return this.httpClient.post<PaymentCreateResponse>(
      `${this.endpoint}v1/method-payments-khipu/payments/`,
      paymentKhipuRequest
    );
  }
}
