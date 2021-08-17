import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RutValidator } from "ng9-rut";
import { emailRegex } from "src/app/shared/constants/email";
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
        { value: "123456785", disabled: false },
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

  public getRutError(): string {
    const control = this.form.get("rut");
    return control.hasError("required")
      ? "Debe ingresar un rut"
      : control.hasError("minlength")
      ? "Debe ingresar un rut válido"
      : control.hasError("maxlength")
      ? "Debe ingresar un rut válido"
      : control.hasError("invalidRut")
      ? "Debe ingresar un rut válido"
      : null;
  }

  public getBankError(): string {
    const control = this.form.get("bank");
    return control.hasError("required")
      ? "Debe seleccionar un banco"
      : control.hasError("min")
      ? "Debe seleccionar un banco"
      : null;
  }

  public getAccountNumberError(): string {
    const control = this.form.get("accountNumber");
    return control.hasError("required")
      ? "Debe ingresar un número de cuenta"
      : control.hasError("minlength")
      ? "Debe tener mínimo 4 caracteres"
      : control.hasError("maxlength")
      ? "Debe tener máximo 20 caracteres"
      : null;
  }

  public getNameAccountOwnerError(): string {
    const control = this.form.get("nameAccountOwner");
    return control.hasError("required")
      ? "Debe ingresar el nombre del titular"
      : control.hasError("minlength")
      ? "Debe tener mínimo 5 caracteres"
      : control.hasError("maxlength")
      ? "Debe tener máximo 50 caracteres"
      : null;
  }

  public getEmailError(): string {
    const control = this.form.get("email");
    return control.hasError("required")
      ? "Debe ingresar un email"
      : control.hasError("email")
      ? "Debe ingresar un email válido"
      : control.hasError("pattern")
      ? "Debe ingresar un email válido"
      : null;
  }

  public getAccountTypeError(): string {
    const control = this.form.get("accountType");
    return control.hasError("required")
      ? "Debe seleccionar un tipo de cuenta"
      : control.hasError("min")
      ? "Debe seleccionar un tipo de cuenta"
      : null;
  }
}
