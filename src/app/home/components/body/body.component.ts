import { Component, OnInit } from "@angular/core";
// ELIMINAR
import { PaymentKhipuRequest } from "@src/app/shared/interfaces/payment-khipu-request";
import { PaymentService } from "@src/app/shared/services/payment.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"],
})
export class BodyComponent implements OnInit {
  public constructor(private paymentService: PaymentService) {}

  public ngOnInit(): void {}

  public goPayment(): void {
    const paymentKhipuRequest: PaymentKhipuRequest = {
      subject: "Pago prueba",
      currency: "CLP",
      ammount: 200,
    };

    this.paymentService.getPaymentKhipuRequest(paymentKhipuRequest).subscribe(
      (data) => {
        // window.open(data.payment_url);
        window.location.href = data.payment_url;
      },
      (error: HttpErrorResponse) => {
        // this.loading = false;
        if (error.status === 409) {
          // this.showErrorMessage();
        } else {
          throw error;
        }
      }
    );
  }
}
