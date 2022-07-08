import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Product, ReservationAdd } from "@app/business/bussines-home/interfaces/reservation-add";
import { ReservationService } from "@app/core/services/reservation.service";
import { DialogModel } from "@app/shared/components/dialog/shared/interfaces/dialog-model";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";
import { SearchBarService } from "@app/shared/components/search-bar/shared/services/search-bar.service";
import { ButtonCustom } from "@app/shared/controls/customs/buttons/shared/interfaces/button-custom";
import { DatePickerConfig, DateService } from "@app/shared/helpers/date.service";
import { ErrorMessages } from "@app/shared/inmutable/enums/error-message.enum";
import { DateValidator } from "src/app/shared/validations/date-validator";

@Component({
  selector: "app-client-create-reservation",
  templateUrl: "./client-create-reservation.component.html",
  styleUrls: ["./client-create-reservation.component.scss"],
})
export class ClientCreateReservationComponent implements OnInit {
  public reservationForm: FormGroup;
  public reservationDatePickerConfig: DatePickerConfig;
  public backCustomButton: ButtonCustom = {
    buttonMaterialType: "mat-raised-button",
    buttonType: "button",
    buttonTypeClass: "btn-normal-red",
  };

  public createReservationCustomButton: ButtonCustom = {
    buttonMaterialType: "mat-raised-button",
    buttonType: "submit",
    buttonTypeClass: "btn-submit",
  };

  public get PeopleNumber(): AbstractControl {
    return this.reservationForm.get("peopleNumber");
  }
  public get DateReservation(): AbstractControl {
    return this.reservationForm.get("dateReservation");
  }
  public get HourReservation(): AbstractControl {
    return this.reservationForm.get("hourReservation");
  }

  public constructor(
    private formBuilder: FormBuilder,
    private searchBarService: SearchBarService,
    private dateService: DateService,
    private reservationService: ReservationService,
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) public data: { total: number; branchId: number; products: Product[] }
  ) {}

  public ngOnInit(): void {
    this.buildFormReservation();
    this.getDateReservation();
    this.setReservationDatePicker();
  }

  public addPersonToReservation(): void {
    const control: AbstractControl = this.PeopleNumber;
    control.setValue(+control.value + 1);
  }

  public removePersonFromReservation(): void {
    const control: AbstractControl = this.PeopleNumber;
    if (+control.value > 1) {
      control.setValue(+control.value - 1);
    }
  }

  public setReservationDatePicker(): void {
    this.reservationDatePickerConfig = this.dateService.setConfigReservatioDate();
  }

  private buildFormReservation(): void {
    this.reservationForm = this.formBuilder.group({
      peopleNumber: ["1", [Validators.min(1), Validators.max(5)]],
      dateReservation: ["", [DateValidator.validator, Validators.required]],
      hourReservation: ["", [Validators.required, Validators.pattern(DateValidator.timeRegex())]],
    });
  }

  private getDateReservation() {
    this.reservationForm.get("dateReservation").setValue(new Date(this.searchBarService.getDateReservation()));
  }

  public goPayment(): void {
    if (!this.reservationForm.invalid) {
      const reservationCreate: ReservationAdd = {
        branch_id: this.data.branchId,
        date: this.DateReservation.value,
        people: this.PeopleNumber.value,
        hour: this.HourReservation.value,
        products: this.data.products,
      };
      this.reservationService.postReservation(reservationCreate).subscribe(
        (paymentDetail) => {
          const { url_payment, payment_id, reservation_id } = paymentDetail;
          localStorage.setItem("payment_id", payment_id);
          localStorage.setItem("reservation_id", reservation_id.toString());
          window.location.href = url_payment;
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
  }

  private showErrorMessage(dialogModel: DialogModel): void {
    this.dialogService.openDialog(dialogModel);
  }

  // #region Errors
  public getPeopleNumberErrorMessage(): string {
    const control = this.PeopleNumber;
    return control.hasError("min")
      ? ErrorMessages.Min.replace("{0}", "1")
      : control.hasError("max")
      ? ErrorMessages.Max.replace("{0}", "5")
      : null;
  }

  public getDateReservationErrorMessage(): string {
    const control = this.DateReservation;
    return control.hasError("required")
      ? ErrorMessages.InvalidVariant.replace("{0}", "fecha")
      : control.hasError("invalidDate")
      ? "Debe ser igual o mayor a hoy"
      : control.hasError("matDatepickerParse")
      ? ErrorMessages.InvalidVariant.replace("{0}", "fecha")
      : null;
  }

  public getHourReservationErrorMessage(): string {
    const control = this.HourReservation;
    return control.hasError("pattern")
      ? ErrorMessages.InvalidVariant.replace("{0}", "hora")
      : control.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "hora")
      : null;
  }

  // #endregion Errors
}
