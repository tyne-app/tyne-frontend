import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RutValidator } from "ng9-rut";
import { emailRegex } from "src/app/shared/inmutable/constants/email";
import { ErrorMessages } from "src/app/shared/inmutable/enums/error-messages";
import { Bank } from "src/app/shared/interfaces/bank";
import { BankService } from "src/app/shared/services/bank.service";

@Component({
  selector: "app-business-profile-edit-bank-data",
  templateUrl: "./business-profile-edit-bank-data.component.html",
  styleUrls: ["./business-profile-edit-bank-data.component.scss"],
})
export class BusinessProfileEditBankDataComponent implements OnInit {
  public form: FormGroup;
  public accountType = [];
  public banks: Bank[] = [];
  public isSubmitButtonEnabled = false;

  public constructor(
    private fb: FormBuilder,
    private rutValidator: RutValidator,
    private banksService: BankService
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.getAccountType();
    this.getBanks();
  }

  public initForm(): void {
    this.form = this.fb.group({
      rut: [
        { value: "123456785", disabled: true },
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(9),
          this.rutValidator,
        ],
      ],
      bank: [
        { value: "0", disabled: true },
        [Validators.required, Validators.min(1)],
      ],
      accountNumber: [
        { value: "4896435165", disabled: true },
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ],
      ],
      nameAccountOwner: [
        { value: "Carlos Palacios", disabled: true },
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      accountType: [
        { value: "0", disabled: true },
        [Validators.required, Validators.min(1)],
      ],
      email: [
        { value: "test@test.cl", disabled: true },
        [Validators.email, Validators.required, Validators.pattern(emailRegex)],
      ],
    });
  }

  public requestDataEdition(): void {
    this.isSubmitButtonEnabled = true;
    this.form.get("rut").enable();
    this.form.get("bank").enable();
    this.form.get("accountNumber").enable();
    this.form.get("nameAccountOwner").enable();
    this.form.get("accountType").enable();
    this.form.get("email").enable();
  }

  public save(): void {
    //
  }

  private getAccountType(): void {
    this.accountType = [
      {
        id: 1,
        name: "Vista",
      },
      {
        id: 2,
        name: "Corriente",
      },
    ];
  }

  private getBanks() {
    this.banksService.getBanks().subscribe((banks) => {
      this.banks = banks;
    });
  }

  // #region Errors

  public getRutError(): string {
    const control = this.form.get("rut");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "rut")
      : control.hasError("minlength")
      ? ErrorMessages.Invalid.replace("{0}", "rut")
      : control.hasError("maxlength")
      ? ErrorMessages.Invalid.replace("{0}", "rut")
      : control.hasError("invalidRut")
      ? ErrorMessages.Invalid.replace("{0}", "rut")
      : null;
  }

  public getBankError(): string {
    const control = this.form.get("bank");
    return control.hasError("required")
      ? ErrorMessages.RequiredSelect.replace("{0}", "banco")
      : control.hasError("min")
      ? ErrorMessages.RequiredSelect.replace("{0}", "banco")
      : null;
  }

  public getAccountNumberError(): string {
    const control = this.form.get("accountNumber");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "número de cuenta")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "4")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "20")
      : null;
  }

  public getNameAccountOwnerError(): string {
    const control = this.form.get("nameAccountOwner");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "nombre de titular")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "5")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }

  public getEmailError(): string {
    const control = this.form.get("email");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "email")
      : control.hasError("email")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : control.hasError("pattern")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : null;
  }

  public getAccountTypeError(): string {
    const control = this.form.get("accountType");
    return control.hasError("required")
      ? ErrorMessages.RequiredSelect.replace("{0}", "tipo de cuenta")
      : control.hasError("min")
      ? ErrorMessages.RequiredSelect.replace("{0}", "tipo de cuenta")
      : null;
  }

  // #endregion
}
