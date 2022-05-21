import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ScheduleService } from "@app/shared/helpers/schedule.service";
import { passwordRegex } from "@app/shared/inmutable/constants/regex";
import { ErrorMessages } from "@app/shared/inmutable/enums/error-message.enum";
import { RestaurantAccount } from "@app/shared/interfaces/restaurant/restaurant-account";
import { PasswordValidator } from "src/app/shared/validations/password-validator";
import { BusinessProfileEditBankDataComponent } from "../business-profile-edit-bank-data/business-profile-edit-bank-data.component";
import { BusinessProfileEditDataComponent } from "../business-profile-edit-data/business-profile-edit-data.component";
import { BusinessProfileEditPasswordComponent } from "../business-profile-edit-password/business-profile-edit-password.component";
import { BusinessProfileEditWorkDaysComponent } from "../business-profile-edit-work-days/business-profile-edit-work-days.component";

@Component({
  selector: "app-business-profile-body",
  templateUrl: "./business-profile-body.component.html",
  styleUrls: ["./business-profile-body.component.scss"],
})
export class BusinessProfileBodyComponent implements OnInit {
  public passwordForm: FormGroup;
  @Input()
  public account: RestaurantAccount = null;

  public constructor(private fb: FormBuilder, private dialog: MatDialog, private scheduleService: ScheduleService) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.passwordForm = this.fb.group({
      currentPassword: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      passwordConfirm: ["", [Validators.required, PasswordValidator("password")]],
    });
  }

  public openEditDataComponent(): void {
    const dialogRef = this.dialog.open(BusinessProfileEditDataComponent, {
      maxWidth: "95%",
      minWidth: "75%",
      panelClass: "business-profile-dialog",
    });

    dialogRef.afterClosed().subscribe((result) => {
      // empty
    });
  }

  public openEditPasswordComponent(): void {
    const dialogRef = this.dialog.open(BusinessProfileEditPasswordComponent, {
      maxWidth: "95%",
      minWidth: "75%",
      panelClass: "business-profile-dialog",
    });

    dialogRef.afterClosed().subscribe((result) => {
      // empty
    });
  }

  public openEditBankDataComponent(): void {
    const dialogRef = this.dialog.open(BusinessProfileEditBankDataComponent, {
      maxWidth: "95%",
      minWidth: "75%",
      panelClass: "business-profile-dialog",
    });

    dialogRef.afterClosed().subscribe((result) => {
      // empty
    });
  }

  public openEditWorkDaysComponent(): void {
    const dialogRef = this.dialog.open(BusinessProfileEditWorkDaysComponent, {
      maxWidth: "95%",
      minWidth: "75%",
      panelClass: "business-profile-dialog",
      data: this.account,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // empty
    });
  }

  public getCurrentPasswordError(): string {
    const currentPassword = this.passwordForm.get("currentPassword");
    return currentPassword.hasError("required") ? ErrorMessages.RequiredVariant.replace("{0}", "contraseña") : null;
  }

  public getPasswordError(): string {
    const password = this.passwordForm.get("password");
    return password.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "contraseña")
      : password.hasError("pattern")
      ? ErrorMessages.PasswordPattern
      : null;
  }

  public getPasswordConfirmError(): string {
    const passwordConfirm = this.passwordForm.get("passwordConfirm");
    return passwordConfirm.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "contraseña")
      : passwordConfirm.hasError("notMatch")
      ? ErrorMessages.PasswordDoesntMatch
      : null;
  }

  public getDay = (dayNumber: number): string => this.scheduleService.getDay(dayNumber);
}
