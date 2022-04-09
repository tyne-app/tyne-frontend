import { Component, OnInit } from "@angular/core";
import { ReservationService } from "@app/core/services/reservation.service";
import { reservationStatus } from "@app/shared/inmutable/enums/reservation-status.enum";
import { UpdateReservationPaymentDto } from "@app/shared/interfaces/reservation/reservation-payment";
import { Router } from "@angular/router";

@Component({
  selector: "app-rejected-pay",
  templateUrl: "./rejected-pay.component.html",
  styleUrls: ["./rejected-pay.component.scss"],
})
export class RejectedPayComponent implements OnInit {
  public constructor(private reservationService: ReservationService, private router: Router) {}

  public ngOnInit(): void {
    const path: any = this.router.parseUrl(this.router.url);
    const paymentNumber: string = path.queryParams["payment_id"];
    const paymentId: string = localStorage.getItem("payment_id");
    const reservationId: number = +localStorage.getItem("reservation_id");

    const updateReservation: UpdateReservationPaymentDto = {
      payment_id: paymentId,
      reservation_id: reservationId,
      payment_number: paymentNumber,
      status: reservationStatus.payRejected,
    };
    this.reservationService.putReservation(updateReservation).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
