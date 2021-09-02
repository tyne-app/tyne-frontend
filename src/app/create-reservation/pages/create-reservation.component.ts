import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ErrorMessages } from "src/app/shared/constants/error-messages.enum";
import { DateValidator } from "src/app/shared/validations/date-validator";

@Component({
  selector: "app-create-reservation",
  templateUrl: "./create-reservation.component.html",
  styleUrls: ["./create-reservation.component.scss"],
})
export class CreateReservationComponent implements OnInit {
  public form: FormGroup;
  public preferredLocations = [];

  public constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.initForm();
    this.getPreferredLocations();
  }

  public save(): void {
    // TODO
  }

  private initForm(): void {
    this.form = this.fb.group({
      peopleNumber: ["0", [Validators.min(1)]],
      dateReservation: ["", [DateValidator.validator, Validators.required]],
      hourReservation: ["", []],
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

  // #region Errors
  public dateReservationErrorMessage(): string {
    return this.form.get("dateReservation").hasError("required")
      ? "Debe ingresar una fecha válida"
      : this.form.get("dateReservation").hasError("invalidDate")
      ? "Debe ser igual o mayor a hoy"
      : this.form.get("dateReservation").hasError("matDatepickerParse")
      ? "Debe ingresar una fecha válida"
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
