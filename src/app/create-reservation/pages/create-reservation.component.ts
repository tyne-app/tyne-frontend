import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SearchBarService } from "src/app/shared/components/components/search-bar/services/search-bar.service";
import { ErrorMessages } from "src/app/shared/inmutable/enums/error-messages";
import { DateValidator } from "src/app/shared/validations/date-validator";
import { PaymentService } from "@app/core/services/payment.service";
import { PaymentKhipuRequest } from "src/app/shared/interfaces/payment-khipu-request";
import { PaymentCreateResponse } from "src/app/shared/interfaces/payment-create-response";
import { HttpErrorResponse } from "@angular/common/http";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-create-reservation",
  templateUrl: "./create-reservation.component.html",
  styleUrls: ["./create-reservation.component.scss"],
})
export class CreateReservationComponent implements OnInit {
  public form: FormGroup;
  public preferredLocations = [];
  public minDate = new Date();

  public constructor(
    private fb: FormBuilder,
    private searchBarService: SearchBarService,
    private paymentService: PaymentService,
    @Inject(MAT_DIALOG_DATA) public data: { total: number }
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.getPreferredLocations();
    this.getDateReservation();
  }

  public save(): void {
    // TODO
  }

  public addPersonToReservation(): void {
    const control = this.form.get("peopleNumber");
    control.setValue(+control.value + 1);
  }

  public removePersonFromReservation(): void {
    const control = this.form.get("peopleNumber");

    if (+control.value > 0) {
      control.setValue(+control.value - 1);
    }
  }

  private initForm(): void {
    this.form = this.fb.group({
      peopleNumber: ["1", [Validators.min(1), Validators.max(5)]],
      dateReservation: ["", [DateValidator.validator, Validators.required]],
      hourReservation: ["", [Validators.required, Validators.pattern(DateValidator.timeRegex())]],
      preferredLocation: ["", [Validators.required, Validators.min(1)]],
    });
  }

  private getPreferredLocations() {
    this.preferredLocations = [
      {
        id: 1,
        name: "Interior",
      },
      {
        id: 2,
        name: "Exterior",
      },
    ];
  }

  private getDateReservation() {
    this.form.get("dateReservation").setValue(new Date(this.searchBarService.getDateReservation()));
  }

  public goPayment(): string {
    const paymentKhipuRequest: PaymentKhipuRequest = {
      subject: "Pago prueba",
      currency: "CLP",
      ammount: this.data.total,
    };

    // return "";
    // this.paymentService.getPaymentKhipuRequest(paymentKhipuRequest);
    this.paymentService.getPaymentKhipuRequest(paymentKhipuRequest).subscribe(
      (data: PaymentCreateResponse) => {
        return data;
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
    return "";
  }

  // #region Errors
  public getPeopleNumberErrorMessage(): string {
    const control = this.form.get("peopleNumber");
    return control.hasError("min")
      ? ErrorMessages.Min.replace("{0}", "1")
      : control.hasError("max")
      ? ErrorMessages.Max.replace("{0}", "5")
      : null;
  }

  public getDateReservationErrorMessage(): string {
    const control = this.form.get("dateReservation");
    return control.hasError("required")
      ? ErrorMessages.InvalidVariant.replace("{0}", "fecha")
      : control.hasError("invalidDate")
      ? "Debe ser igual o mayor a hoy"
      : control.hasError("matDatepickerParse")
      ? ErrorMessages.InvalidVariant.replace("{0}", "fecha")
      : null;
  }

  public getHourReservationErrorMessage(): string {
    const control = this.form.get("hourReservation");
    return control.hasError("pattern")
      ? ErrorMessages.InvalidVariant.replace("{0}", "hora")
      : control.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "hora")
      : null;
  }

  public getPreferredLocationsError(): string {
    const control = this.form.get("preferredLocation");
    return control.hasError("required")
      ? ErrorMessages.RequiredSelectVariant.replace("{0}", "preferencia")
      : control.hasError("min")
      ? ErrorMessages.RequiredSelectVariant.replace("{0}", "preferencia")
      : null;
  }
  // #endregion Errors
}
