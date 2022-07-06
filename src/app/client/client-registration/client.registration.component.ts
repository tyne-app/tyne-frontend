import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { FacebookService } from "@app/auth/shared/services/facebook.service";
import { GoogleService } from "@app/auth/shared/services/google.service";
import { ClientService } from "@app/client/shared/services/client.service";
import {
  errorContent,
  invalidFormContent,
  registerClientContent,
} from "@app/shared/components/dialog/shared/inmutable/constants/dialog-message";
import { DialogModel } from "@app/shared/components/dialog/shared/interfaces/dialog-model";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";
import { ButtonCustom } from "@app/shared/controls/customs/buttons/shared/interfaces/button-custom";
import { FormControlService } from "@app/shared/helpers";
import { DateService } from "@app/shared/helpers/date.service";
import { emailRegex, passwordRegex } from "@app/shared/inmutable/constants/regex";
import * as moment from "moment";
import { Moment } from "moment";
import { PasswordValidator } from "src/app/shared/validations/password-validator";
import { Client } from "../shared/interfaces/client";

@Component({
  selector: "app-client-registration",
  templateUrl: "./client.registration.component.html",
  styleUrls: ["./client.registration.component.scss"],
})
export class ClientRegistrationComponent implements OnInit {
  public hidePassword = true;
  public hidePassordConfirm = true;
  public loading = false;
  public clientRegisterForm!: FormGroup;
  public isWhiteLogo = false;
  public minDate: Moment | Date;
  public maxDate: Moment | Date;
  public registerCustomButton: ButtonCustom = {
    buttonMaterialType: "mat-raised-button",
    buttonType: "submit",
    buttonTypeClass: "btn-submit",
  };

  public get ClientNameControl(): AbstractControl {
    return this.clientRegisterForm.get("clientName");
  }

  public get ClientLastNameControl(): AbstractControl {
    return this.clientRegisterForm.get("clientLastName");
  }

  public get ClientEmailControl(): AbstractControl {
    return this.clientRegisterForm.get("clientEmail");
  }

  public get ClientPhoneControl(): AbstractControl {
    return this.clientRegisterForm.get("clientPhone");
  }

  public get ClientPasswordControl(): AbstractControl {
    return this.clientRegisterForm.get("password");
  }

  public get ClientBirthdayControl(): AbstractControl {
    return this.clientRegisterForm.get("birthDate");
  }

  public get ClientPasswordConfirmControl(): AbstractControl {
    return this.clientRegisterForm.get("passwordConfirm");
  }

  public constructor(
    private formBuilder: FormBuilder,
    public clientRegistrationDialogReferencce: MatDialogRef<ClientRegistrationComponent>,
    private clientService: ClientService,
    private dialogService: DialogService,
    private googleService: GoogleService,
    private facebookService: FacebookService,
    private dateService: DateService,
    private formControlService: FormControlService
  ) {}

  public ngOnInit(): void {
    this.buildClientRegisterForm();
    this.setDatePickerConfig();
  }

  public buildClientRegisterForm(): void {
    this.clientRegisterForm = this.formBuilder.group({
      clientName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      clientLastName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      clientPhone: ["", [Validators.minLength(12), Validators.maxLength(12)]],
      clientEmail: ["", [Validators.email, Validators.required, Validators.pattern(emailRegex)]],
      password: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      passwordConfirm: ["", [Validators.required, PasswordValidator("password")]],
      birthDate: [""],
    });
  }

  public setDatePickerConfig(): void {
    const { minDate, maxDate } = this.dateService.setConfigDateOfBirthday();
    this.maxDate = maxDate;
    this.minDate = minDate;
  }

  public createClient(): void {
    if (this.clientRegisterForm.invalid) {
      this.showErrorMessage(invalidFormContent);
      return;
    }
    this.loading = true;
    const client: Client = {
      name: this.ClientNameControl.value,
      lastName: this.ClientLastNameControl.value,
      phone:
        this.ClientBirthdayControl.value != null &&
        this.ClientBirthdayControl.value != "" &&
        this.ClientBirthdayControl.value != undefined
          ? this.ClientPhoneControl.value.toString().replace("(", "").replace(")", "").replace(/\s/g, "")
          : "+56999999999",
      email: this.ClientEmailControl.value,
      password: this.ClientPasswordControl.value,
      birthDate:
        this.ClientBirthdayControl.value != null &&
        this.ClientBirthdayControl.value != "" &&
        this.ClientBirthdayControl.value != undefined
          ? this.ClientBirthdayControl.value
          : moment().toISOString(),
    };

    this.clientService.register(client).subscribe(
      (data) => {
        this.loading = false;
        this.showSuccessMessage();
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        let subtitle = "";
        let dialog: DialogModel = {
          isSuccessful: false,
          title: "Problemas con su registro.",
          subtitle: subtitle,
          messageButton: "Volver",
        };

        if (error.status === 400 || error.status === 401) {
          if (Array.isArray(error.error.details)) {
            error.error.details.forEach((element) => {
              subtitle += element + "\n";
            });
          } else {
            subtitle = error.error.details;
          }

          dialog = {
            isSuccessful: false,
            title: "Problemas con su registro.",
            subtitle: subtitle,
            messageButton: "Volver",
          };
        }
        this.showErrorMessage(dialog);
      }
    );
  }

  public facebookRegister(): void {
    this.facebookService.facebookSignUp().subscribe(
      () => {
        this.showSuccessMessage();
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        let subtitle = "";
        let dialog: DialogModel = {
          isSuccessful: false,
          title: "Problemas con su registro.",
          subtitle: subtitle,
          messageButton: "Volver",
        };
        if (error.status === 400 || error.status === 401) {
          if (Array.isArray(error.error.details)) {
            error.error.details.forEach((element) => {
              subtitle += element + "\n";
            });
          } else {
            subtitle = error.error.details;
          }

          dialog = {
            isSuccessful: false,
            title: "Problemas con su registro.",
            subtitle: subtitle,
            messageButton: "Volver",
          };
        }
        this.showErrorMessage(dialog);
      }
    );
  }

  public googleRegister(): void {
    this.googleService.googleSignUp().subscribe(
      () => {
        this.showSuccessMessage();
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        let subtitle = "";
        let dialog: DialogModel = {
          isSuccessful: false,
          title: "Problemas con su registro.",
          subtitle: subtitle,
          messageButton: "Volver",
        };

        if (error.status === 400 || error.status === 401) {
          if (Array.isArray(error.error.details)) {
            error.error.details.forEach((element) => {
              subtitle += element + "\n";
            });
          } else {
            subtitle = error.error.details;
          }

          dialog = {
            isSuccessful: false,
            title: "Problemas con su registro.",
            subtitle: subtitle,
            messageButton: "Volver",
          };
        }
        this.showErrorMessage(dialog);
      }
    );
  }

  public getLogo(): string {
    return this.isWhiteLogo ? "/assets/tyne-logo-white.png" : "/assets/tyne-logo-color.png";
  }
  private showSuccessMessage() {
    this.dialogService.openDialog(registerClientContent);
    this.clientRegistrationDialogReferencce.close();
  }

  private showErrorMessage(dialog?) {
    this.dialogService.openDialog(dialog ? dialog : errorContent);
  }

  // #region Errors

  public getClientNameError(): string {
    return this.formControlService.getNameError(this.ClientNameControl);
  }

  public getClientLastNameError(): string {
    return this.formControlService.getLastNameError(this.ClientLastNameControl);
  }

  public getClientPhoneError(): string {
    return this.formControlService.getClientPhoneError(this.ClientPhoneControl);
  }

  public getClientEmailError(): string {
    return this.formControlService.getEmailError(this.ClientEmailControl);
  }

  public getPasswordError(): string {
    return this.formControlService.getPasswordError(this.ClientPasswordControl);
  }

  public getPasswordConfirmError(): string {
    return this.formControlService.getPasswordConfirmError(this.ClientPasswordConfirmControl);
  }

  public getBirthDateError(): string {
    return this.formControlService.getBirthDateError(this.ClientBirthdayControl);
  }

  // #endregion
}
