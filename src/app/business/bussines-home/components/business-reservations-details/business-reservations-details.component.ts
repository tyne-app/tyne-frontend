import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpErrorResponse } from "@angular/common/http";
import { LocalReservationDetailResponse } from "@app/business/shared/interfaces/local-reservation-detail-response";
import { MenuService } from "@app/core/services/menu.service";
import { reservationStatus } from "@app/shared/inmutable/enums/reservation-status.enum";
import { UpdateReservationPaymentDto } from "@app/shared/interfaces/reservation/reservation-payment";
import { ReservationService } from "@app/core/services/reservation.service";
import { ButtonCustom } from "@app/shared/controls/customs/buttons/shared/interfaces/button-custom";

@Component({
  selector: "app-business-reservations-details",
  templateUrl: "./business-reservations-details.component.html",
  styleUrls: ["./business-reservations-details.component.scss"],
})
export class BusinessReservationsDetailsComponent implements OnInit {
  public customCollapsedHeight = "";
  public customExpandedHeight = "";
  public allCategories = [];
  public auxCategories = [];
  public detailsReservation: LocalReservationDetailResponse;
  public cancelReservationCustomButton: ButtonCustom = {
    buttonMaterialType: "mat-raised-button",
    buttonType: "button",
    buttonTypeClass: "btn-normal-red",
  };
  public confirmReservationCustomButton: ButtonCustom = {
    buttonMaterialType: "mat-raised-button",
    buttonType: "submit",
    buttonTypeClass: "btn-submit",
  };
  public constructor(
    @Inject(MAT_DIALOG_DATA) public parameters: { reservationId: number; paymentId: string },
    private reservationService: ReservationService,
    private menuService: MenuService
  ) {}

  public ngOnInit(): void {
    this.customCollapsedHeight = "50px";
    this.customExpandedHeight = "50px";
    this.getAllCategories();
    this.getDetailsReservations();
  }

  public getAllCategories(): void {
    this.menuService.getAllCategory().subscribe(
      (data) => {
        this.auxCategories = data;
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

  public getDetailsReservations(): void {
    this.reservationService.getReservationById(this.parameters.reservationId).subscribe(
      (data) => {
        this.detailsReservation = data;
        for (let ix = 0; ix < this.auxCategories.length; ix++) {
          for (let i = 0; i < this.detailsReservation.reservation_detail.length; i++) {
            if (this.auxCategories[ix].id == this.detailsReservation.reservation_detail[i].category_id) {
              this.allCategories.push(this.auxCategories[ix]);
              break;
            }
          }
        }
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

  public confirmReservation(): void {
    const reservation: UpdateReservationPaymentDto = {
      reservation_id: this.parameters.reservationId,
      status: reservationStatus.reservationConfirmed,
      payment_number: "",
      payment_id: this.parameters.paymentId,
    };
    this.reservationService.putReservation(reservation).subscribe();
  }
  public cancelReservation(): void {
    const reservation: UpdateReservationPaymentDto = {
      reservation_id: this.parameters.reservationId,
      status: reservationStatus.payCancelByLocal,
      payment_number: "",
      payment_id: this.parameters.paymentId,
    };
    this.reservationService.putReservation(reservation).subscribe();
  }

  public getDateReservation(dateReservation: string, week_day: string): string {
    if (dateReservation) {
      dateReservation = dateReservation.replace("-", "/").replace("-", "/");
    }

    const date: Date = new Date(dateReservation);
    const days = [];
    days["Monday"] = "Lunes";
    days["Tuesday"] = "Martes";
    days["Wednesday"] = "Miércoles";
    days["Thursday"] = "Jueves";
    days["Friday"] = "Viernes";
    days["Saturday"] = "Sábado";
    days["Sunday"] = "Domingo";

    const day: number = date.getDate();
    const month: number = date.getMonth();
    const year: number = date.getFullYear();
    const dateReturn: string = days[week_day] + " " + day + "/" + month + "/" + year;

    return dateReturn;
  }
}
