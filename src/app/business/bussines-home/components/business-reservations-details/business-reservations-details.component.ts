import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpErrorResponse } from "@angular/common/http";
import { LocalReservationDetailResponse } from "@app/business/shared/interfaces/local-reservation-detail-response";
import { MenuService } from "@app/core/services/menu.service";
import { reservationStatus } from "@app/shared/inmutable/enums/reservation-status.enum";
import { UpdateReservationPaymentDto } from "@app/shared/interfaces/reservation/reservation-payment";
import { ReservationService } from "@app/core/services/reservation.service";
import { ButtonCustom } from "@app/shared/controls/customs/buttons/shared/interfaces/button-custom";
import { DialogModel } from "@app/shared/components/dialog/shared/interfaces/dialog-model";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";
import { ScheduleService } from "@app/shared/helpers/schedule.service";

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
    @Inject(MAT_DIALOG_DATA) public parameters: { reservationId: number; paymentId: string; status_id: number },
    private reservationService: ReservationService,
    private menuService: MenuService,
    private dialogService: DialogService,
    public dialogRef: MatDialogRef<BusinessReservationsDetailsComponent>,
    private scheduleService: ScheduleService
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
        let dialog: DialogModel = {
          isSuccessful: false,
          title: "Ha ocurrido un problema.",
          subtitle: "Ha ocurrido un problema vuelva a intentarlo.",
          messageButton: "Volver",
        };
        if (error.status === 400 || error.status === 401 || error.status === 409) {
          let subtitle = "";
          if (Array.isArray(error.error.details)) {
            error.error.details.forEach((element) => {
              subtitle += element + "\n";
            });
          } else {
            subtitle = error.error.details;
          }
          dialog = {
            isSuccessful: false,
            title: "Ha ocurrido un problema.",
            subtitle: subtitle,
            messageButton: "Volver",
          };
        }
        this.showErrorMessage(dialog);
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
    this.reservationService.putReservation(reservation).subscribe(
      (response) => {
        const dialog: DialogModel = {
          isSuccessful: false,
          title: "¡Exito!",
          subtitle: "Reserva confirmada exitosamente.",
          messageButton: "Volver",
        };
        this.showErrorMessage(dialog);
        this.dialogRef.close(false);
      },
      (error: HttpErrorResponse) => {
        let dialog: DialogModel = {
          isSuccessful: false,
          title: "Ha ocurrido un problema.",
          subtitle: "Ha ocurrido un problema vuelva a intentarlo.",
          messageButton: "Volver",
        };
        if (error.status === 400 || error.status === 401) {
          let subtitle = "";
          if (Array.isArray(error.error.details)) {
            error.error.details.forEach((element) => {
              subtitle += element + "\n";
            });
          } else {
            subtitle = error.error.details;
          }
          dialog = {
            isSuccessful: false,
            title: "Ha ocurrido un problema.",
            subtitle: subtitle,
            messageButton: "Volver",
          };
        }
        this.showErrorMessage(dialog);
      }
    );
  }

  public cancelReservation(): void {
    const reservation: UpdateReservationPaymentDto = {
      reservation_id: this.parameters.reservationId,
      status: reservationStatus.payCancelByLocal,
      payment_number: "",
      payment_id: this.parameters.paymentId,
    };
    this.reservationService.putReservation(reservation).subscribe(
      (response) => {
        const dialog: DialogModel = {
          isSuccessful: false,
          title: "¡Exito!",
          subtitle: "Reserva cancelada exitosamente.",
          messageButton: "Volver",
        };
        this.showErrorMessage(dialog);
        this.dialogRef.close(false);
      },
      (error: HttpErrorResponse) => {
        let dialog: DialogModel = {
          isSuccessful: false,
          title: "Ha ocurrido un problema.",
          subtitle: "Ha ocurrido un problema vuelva a intentarlo.",
          messageButton: "Volver",
        };
        if (error.status === 400 || error.status === 401) {
          let subtitle = "";
          if (Array.isArray(error.error.details)) {
            error.error.details.forEach((element) => {
              subtitle += element + "\n";
            });
          } else {
            subtitle = error.error.details;
          }
          dialog = {
            isSuccessful: false,
            title: "Ha ocurrido un problema.",
            subtitle: subtitle,
            messageButton: "Volver",
          };
        }
        this.showErrorMessage(dialog);
      }
    );
  }

  public getDateReservation(dateReservation: string): string {
    if (dateReservation) {
      dateReservation = dateReservation.replace("-", "/").replace("-", "/");
    }
    const date: Date = new Date(dateReservation);
    const day: number = date.getDate();
    const month: number = date.getMonth() + 1;
    const year: number = date.getFullYear();
    const dayNumber = date.getDay();

    return this.getDay(dayNumber) + " " + day + "/" + month + "/" + year;
  }

  private showErrorMessage(dialogModel: DialogModel): void {
    this.dialogService.openDialog(dialogModel);
  }

  public getDay = (dayNumber: number): string => this.scheduleService.getDay(dayNumber);
}
