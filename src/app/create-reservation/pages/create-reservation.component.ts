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
      peopleNumber: ["1", [Validators.min(1), Validators.max(20)]],
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
  public peopleNumberErrorMessage(): string {
    const control = this.form.get("peopleNumber");
    return control.hasError("min")
      ? ErrorMessages.Min.replace("{0}", "1")
      : control.hasError("max")
      ? ErrorMessages.Max.replace("{0}", "20")
      : null;
  }

  public dateReservationErrorMessage(): string {
    const control = this.form.get("dateReservation");
    return control.hasError("required")
      ? ErrorMessages.InvalidVariant.replace("{0}", "fecha")
      : control.hasError("invalidDate")
      ? "Debe ser igual o mayor a hoy"
      : control.hasError("matDatepickerParse")
      ? ErrorMessages.InvalidVariant.replace("{0}", "fecha")
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
