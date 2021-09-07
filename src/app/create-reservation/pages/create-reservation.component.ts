import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SearchBarService } from "src/app/shared/components/components/search-bar/services/search-bar.service";
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
  public minDate = new Date();

  public constructor(
    private fb: FormBuilder,
    private searchBarService: SearchBarService
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
      hourReservation: [
        "",
        [Validators.required, Validators.pattern(DateValidator.timeRegex())],
      ],
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
    this.form
      .get("dateReservation")
      .setValue(new Date(this.searchBarService.getDateReservation()));
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
