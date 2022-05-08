import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ReservationService } from "@app/core/services/reservation.service";
import { ButtonCustom } from "@app/shared/controls/customs/buttons/shared/interfaces/button-custom";
import { reservationStatus } from "@app/shared/inmutable/enums/reservation-status.enum";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";
import { UpdateReservationPaymentDto } from "@app/shared/interfaces/reservation/reservation-payment";

@Component({
  selector: "app-success-pay",
  templateUrl: "./success-pay.component.html",
  styleUrls: ["./success-pay.component.scss"],
})
export class SuccessPayComponent implements OnInit {
  public localId: string;
  public goBackLocalCustomButton: ButtonCustom = {
    buttonMaterialType: "mat-raised-button",
    buttonType: "button",
    buttonTypeClass: "btn-normal-red",
  };

  public goToOrderCustomButton: ButtonCustom = {
    buttonMaterialType: "mat-raised-button",
    buttonType: "button",
    buttonTypeClass: "btn-submit",
  };

  public constructor(private reservationService: ReservationService, private router: Router) {}

  public ngOnInit(): void {
    const path: any = this.router.parseUrl(this.router.url);
    const paymentNumber: string = path.queryParams["payment_id"];
    const paymentId: string = localStorage.getItem("payment_id");
    const reservationId: number = +localStorage.getItem("reservation_id");
    this.localId = localStorage.getItem("local_id");

    const updateReservation: UpdateReservationPaymentDto = {
      payment_id: paymentId,
      reservation_id: reservationId,
      payment_number: paymentNumber,
      status: reservationStatus.paySuccess,
    };
    if (paymentId && reservationId) {
      this.reservationService.putReservation(updateReservation).subscribe(
        (response) => {
        },
        (error) => {
        }
      );
    }
  }

  public goBackToLocalProfile(): void {
    this.router.navigate([`/${TyneRoutes.BusinessDetail}`], {
      queryParams: {
        id: this.localId,
      },
    });
  }

  public goToOrder(): void {
    this.router.navigate([`/${TyneRoutes.ClientPendingReservation}`]);
  }
}
