import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { RutValidator } from "ng9-rut";
import { DialogModel } from "src/app/shared/components/components/dialog/models/dialog-model";
import { DialogService } from "src/app/shared/components/components/dialog/services/dialog.service";
import { emailRegex } from "src/app/shared/inmutable/constants/email";
import { passwordRegex } from "src/app/shared/inmutable/constants/password";
import { ErrorMessages } from "src/app/shared/inmutable/enums/error-messages";
import { Bank } from "src/app/shared/interfaces/bank";
import { City } from "src/app/shared/interfaces/city";
import { State } from "src/app/shared/interfaces/state";
import { BankService } from "src/app/shared/services/bank.service";
import { RestaurantService } from "src/app/shared/services/restaurant.service";
import { TerritorialsService } from "src/app/shared/services/territorials.service";
import { EmailValidator } from "src/app/shared/validations/email-validator";
import { PasswordValidator } from "src/app/shared/validations/password-validator";
import { environment } from "src/environments/environment";
import { BusinessRegistrationDto } from "../models/business-registration-dto";

@Component({
  selector: "app-business-registration",
  templateUrl: "./business-registration.component.html",
  styleUrls: ["./business-registration.component.scss"],
})
export class BusinessRegistrationComponent implements OnInit {
  public isLinear = environment.production;
  public cities: City[] = [];
  public states: State[] = [];
  public citiesForBranchs: City[] = [];
  public statesForBranchs: State[] = [];
  public banks: Bank[] = [];
  public accountType = [];
  public rutRepresentanteLegal: string = null;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public isLoading = false;

  public constructor(
    private fb: FormBuilder,
    private rutValidator: RutValidator,
    private snackBar: MatSnackBar,
    private router: Router,
    private territorialsService: TerritorialsService,
    private banksService: BankService,
    private restaurantService: RestaurantService,
    private dialogService: DialogService
  ) {}

  public ngOnInit(): void {
    this.initFirstFormGroup();
    this.initSecondFormGroup();
    this.initThirdFormGroup();
    this.getCities();
    this.getBanks();
    this.getAccountType();
  }

  public initFirstFormGroup(): void {
    this.firstFormGroup = this.fb.group({
      managerName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      managerLastName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      managerPhone: ["", [Validators.required, Validators.minLength(17), Validators.maxLength(17)]],
      managerEmail: ["", [Validators.email, Validators.required, Validators.pattern(emailRegex)]],
      managerEmailConfirm: ["", [Validators.required, Validators.pattern(emailRegex), EmailValidator("managerEmail")]],
      password: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      passwordConfirm: ["", [Validators.required, PasswordValidator("password")]],
    });
  }

  public initSecondFormGroup(): void {
    this.secondFormGroup = this.fb.group({
      legalRepresentativeName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      legalRepresentativeLastName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      legalRepresentativeRut: [
        "",
        [Validators.required, Validators.minLength(8), Validators.maxLength(9), this.rutValidator],
      ],
      legalRepresentativeEmail: ["", [Validators.email, Validators.required, Validators.pattern(emailRegex)]],
      legalRepresentativePhone: ["", [Validators.required, Validators.minLength(17), Validators.maxLength(17)]],
      mainOfficeNameCompany: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      mainOfficeBusinessLine: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      mainOfficeRutBusiness: [
        "",
        [Validators.required, Validators.minLength(8), Validators.maxLength(9), this.rutValidator],
      ],
      mainOfficeLocationAddress: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      mainOfficeLocationNumber: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      mainOfficePhone: ["", [Validators.required, Validators.minLength(17), Validators.maxLength(17)]],
      mainOfficeLocationCity: ["0", [Validators.required, Validators.min(1)]],
      mainOfficeLocationState: ["0", [Validators.required, Validators.min(1)]],
      nameCompany: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      branchLocationAddress: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      branchLocationNumber: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      branchLocationCity: ["0", [Validators.required, Validators.min(1)]],
      branchLocationState: ["0", [Validators.required, Validators.min(1)]],
      branchHavePet: ["0"],
    });
  }

  public initThirdFormGroup(): void {
    this.thirdFormGroup = this.fb.group({
      rutAccountOwner: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(9), this.rutValidator]],
      nameAccountOwner: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      accountNumber: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      bank: ["0", [Validators.required, Validators.min(1)]],
      accountType: ["0", [Validators.required, Validators.min(1)]],
    });
  }

  public getCities(): void {
    this.territorialsService.getCities(1).subscribe((cities) => {
      this.cities = cities;
      this.citiesForBranchs = cities;
    });
  }

  public getStates(): void {
    const idCity = this.secondFormGroup.get("mainOfficeLocationCity").value;
    this.territorialsService.getStates(idCity).subscribe((states) => {
      this.states = states;
      this.secondFormGroup.get("mainOfficeLocationState").setValue("0");
    });
  }

  public getStatesForBranch(): void {
    const idCity = this.secondFormGroup.get("branchLocationCity").value;
    this.territorialsService.getStates(idCity).subscribe((states) => {
      this.statesForBranchs = states;
      this.secondFormGroup.get("branchLocationState").setValue("0");
    });
  }

  public getBanks(): void {
    this.banksService.getBanks().subscribe((banks) => {
      this.banks = banks;
    });
  }

  public getAccountType(): void {
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

  public saveNewBusiness(): void {
    if (this.thirdFormGroup.invalid) return;

    const newBusiness = this.getBusinessData();

    this.isLoading = true;
    this.restaurantService.createNewRestaurant(newBusiness).subscribe(
      (x) => {
        this.isLoading = false;
        this.showSuccessMessage();
      },
      (error) => {
        this.isLoading = false;
        throw error;
      }
    );
  }

  private getBusinessData(): BusinessRegistrationDto {
    const newBusiness: BusinessRegistrationDto = {
      legal_representative: [
        {
          name: this.firstFormGroup.get("managerName").value,
          last_name: this.firstFormGroup.get("managerLastName").value,
          phone: this.firstFormGroup
            .get("managerPhone")
            .value.toString()
            .replace("(", "")
            .replace(")", "")
            .replace(/\s/g, ""),
          identifier: null,
          email: this.firstFormGroup.get("managerEmail").value,
          password: this.firstFormGroup.get("password").value,
          type_legal_representative_id: 2,
        },
        {
          name: this.secondFormGroup.get("legalRepresentativeName").value,
          last_name: this.secondFormGroup.get("legalRepresentativeLastName").value,
          identifier: this.secondFormGroup.get("legalRepresentativeRut").value,
          email: this.secondFormGroup.get("legalRepresentativeEmail").value,
          phone: this.secondFormGroup
            .get("legalRepresentativePhone")
            .value.toString()
            .replace("(", "")
            .replace(")", "")
            .replace(/\s/g, ""),
          password: null,
          type_legal_representative_id: 1,
        },
      ],
      branch: {
        name: this.secondFormGroup.get("nameCompany").value,
        address:
          this.secondFormGroup.get("branchLocationAddress").value +
          " " +
          this.secondFormGroup.get("branchLocationNumber").value,
        accept_pet: this.secondFormGroup.get("branchHavePet").value == "1" ? true : false,
        state_id: this.secondFormGroup.get("branchLocationState").value,
      },
      restaurant: {
        identifier: this.secondFormGroup.get("mainOfficeRutBusiness").value,
        social_reason: this.secondFormGroup.get("mainOfficeNameCompany").value,
        commercial_activity: this.secondFormGroup.get("mainOfficeBusinessLine").value,
        address:
          this.secondFormGroup.get("mainOfficeLocationAddress").value +
          " " +
          this.secondFormGroup.get("mainOfficeLocationNumber").value,
        phone: this.secondFormGroup
          .get("mainOfficePhone")
          .value.toString()
          .replace("(", "")
          .replace(")", "")
          .replace(/\s/g, ""),
        state_id: this.secondFormGroup.get("mainOfficeLocationState").value,
      },
      bank_restaurant: {
        account_holder_identifier: this.thirdFormGroup.get("rutAccountOwner").value,
        account_holder: this.thirdFormGroup.get("nameAccountOwner").value,
        account_number: this.thirdFormGroup.get("accountNumber").value,
        bank_id: this.thirdFormGroup.get("bank").value,
        account_type: this.thirdFormGroup.get("accountType").value,
      },
    };

    console.log(JSON.stringify(newBusiness));
    return newBusiness;
  }

  private showSuccessMessage() {
    const dialogModel: DialogModel = {
      title: "¡Felicidades!",
      subtitle: "Te has registrado exitosamente",
      isSuccessful: true,
      messageButton: "Entendido",
    };

    this.dialogService.openDialog(dialogModel);
  }

  // #region First stepper validations
  public getManagerNameError(): string {
    const control = this.firstFormGroup.get("managerName");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "nombre")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "2")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }

  public getManagerLastNameError(): string {
    const control = this.firstFormGroup.get("managerLastName");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "apellido")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "2")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "30")
      : null;
  }

  public getManagerPhoneError(): string {
    const control = this.firstFormGroup.get("managerPhone");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "número")
      : control.hasError("minlength")
      ? ErrorMessages.Invalid.replace("{0}", "número")
      : control.hasError("maxlength")
      ? ErrorMessages.Invalid.replace("{0}", "número")
      : null;
  }

  public getManagerEmailError(): string {
    const control = this.firstFormGroup.get("managerEmail");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "email")
      : control.hasError("email")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : control.hasError("pattern")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : null;
  }

  public getManagerEmailConfirmError(): string {
    const control = this.firstFormGroup.get("managerEmailConfirm");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "email")
      : control.hasError("notMatch")
      ? ErrorMessages.EmailDoesntMatch
      : control.hasError("email")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : control.hasError("pattern")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : null;
  }

  public getPasswordError(): string {
    const control = this.firstFormGroup.get("password");
    return control.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "contraseña")
      : control.hasError("pattern")
      ? ErrorMessages.PasswordPattern
      : null;
  }

  public getPasswordConfirmError(): string {
    const control = this.firstFormGroup.get("passwordConfirm");
    return control.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "contraseña")
      : control.hasError("notMatch")
      ? ErrorMessages.PasswordDoesntMatch
      : null;
  }
  // #endregion First stepper validations

  // #region Second stepper validations
  public getLegalRepresentativeNameError(): string {
    const control = this.secondFormGroup.get("legalRepresentativeName");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "nombre")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "2")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "30")
      : null;
  }

  public getLegalRepresentativeLastNameError(): string {
    const control = this.secondFormGroup.get("legalRepresentativeLastName");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "apellido")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "2")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "30")
      : null;
  }

  public getLegalRepresentativeRutError(): string {
    const control = this.secondFormGroup.get("legalRepresentativeRut");
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

  public getLegalRepresentativeEmailError(): string {
    const control = this.secondFormGroup.get("legalRepresentativeEmail");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "email")
      : control.hasError("email")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : control.hasError("pattern")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : null;
  }

  public getLegalRepresentativePhoneError(): string {
    const control = this.secondFormGroup.get("legalRepresentativePhone");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "número")
      : control.hasError("minlength")
      ? ErrorMessages.Invalid.replace("{0}", "número")
      : control.hasError("maxlength")
      ? ErrorMessages.Invalid.replace("{0}", "número")
      : null;
  }

  public getMainOfficeNameCompanyError(): string {
    const control = this.secondFormGroup.get("mainOfficeNameCompany");
    return control.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "una razón social")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "5")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }

  public getMainOfficeBusinessLineError(): string {
    const control = this.secondFormGroup.get("mainOfficeBusinessLine");
    return control.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "giro")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "5")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }

  public getMainOfficeRutBusinessError(): string {
    const control = this.secondFormGroup.get("mainOfficeRutBusiness");
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

  public getMainOfficeLocationAddressError(): string {
    const control = this.secondFormGroup.get("mainOfficeLocationAddress");
    return control.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "calle")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "5")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }

  public getMainOfficeLocationNumberError(): string {
    const control = this.secondFormGroup.get("mainOfficeLocationNumber");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "número de calle")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "1")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "20")
      : null;
  }

  public getMainOfficePhoneError(): string {
    const control = this.secondFormGroup.get("mainOfficePhone");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "número")
      : control.hasError("minlength")
      ? ErrorMessages.Invalid.replace("{0}", "número")
      : control.hasError("maxlength")
      ? ErrorMessages.Invalid.replace("{0}", "número")
      : null;
  }

  public getMainOfficeLocationCityError(): string {
    const control = this.secondFormGroup.get("mainOfficeLocationCity");
    return control.hasError("required")
      ? ErrorMessages.RequiredSelectVariant.replace("{0}", "región")
      : control.hasError("min")
      ? ErrorMessages.RequiredSelectVariant.replace("{0}", "región")
      : null;
  }

  public getMainOfficeLocationStateError(): string {
    const control = this.secondFormGroup.get("mainOfficeLocationState");
    return control.hasError("required")
      ? ErrorMessages.RequiredSelectVariant.replace("{0}", "comuna")
      : control.hasError("min")
      ? ErrorMessages.RequiredSelectVariant.replace("{0}", "comuna")
      : null;
  }

  public getNameCompanyError(): string {
    const control = this.secondFormGroup.get("nameCompany");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "nombre de local")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "5")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }

  public getBranchLocationAddressError(): string {
    const control = this.secondFormGroup.get("branchLocationAddress");
    return control.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "calle")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "5")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }

  public getBranchLocationNumberError(): string {
    const control = this.secondFormGroup.get("branchLocationNumber");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "número de calle")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "1")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "20")
      : null;
  }

  public getBranchLocationCityError(): string {
    const control = this.secondFormGroup.get("branchLocationCity");
    return control.hasError("required")
      ? ErrorMessages.RequiredSelectVariant.replace("{0}", "región")
      : control.hasError("min")
      ? ErrorMessages.RequiredSelectVariant.replace("{0}", "región")
      : null;
  }

  public getBranchLocationStateError(): string {
    const control = this.secondFormGroup.get("branchLocationState");
    return control.hasError("required")
      ? ErrorMessages.RequiredSelectVariant.replace("{0}", "comuna")
      : control.hasError("min")
      ? ErrorMessages.RequiredSelectVariant.replace("{0}", "comuna")
      : null;
  }

  // #endregion Second stepper validations

  // #region Third stepper validations
  public getRutAccountOwnerError(): string {
    const control = this.thirdFormGroup.get("rutAccountOwner");
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

  public getNameAccountOwnerError(): string {
    const control = this.thirdFormGroup.get("nameAccountOwner");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "nombre de titular")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "5")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }

  public getAccountNumberError(): string {
    const control = this.thirdFormGroup.get("accountNumber");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "número de cuenta")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "4")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "20")
      : null;
  }

  public getBankError(): string {
    const control = this.thirdFormGroup.get("bank");
    return control.hasError("required")
      ? ErrorMessages.RequiredSelect.replace("{0}", "banco")
      : control.hasError("min")
      ? ErrorMessages.RequiredSelect.replace("{0}", "banco")
      : null;
  }

  public getAccountTypeError(): string {
    const control = this.thirdFormGroup.get("accountType");
    return control.hasError("required")
      ? ErrorMessages.RequiredSelect.replace("{0}", "tipo de cuenta")
      : control.hasError("min")
      ? ErrorMessages.RequiredSelect.replace("{0}", "tipo de cuenta")
      : null;
  }
  // #endregion Third stepper validations
}
