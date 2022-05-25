import { HttpErrorResponse } from "@angular/common/http";
import { Component, HostListener, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BusinessService } from "@app/business/shared/services/business.service";
import { BankService } from "@app/core/services/bank.service";
import { TerritorialsService } from "@app/core/services/territorials.service";
import { DialogModel } from "@app/shared/components/dialog/shared/interfaces/dialog-model";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";
import { SafeFormData } from "@app/shared/guard/form-save.guard";
import { FormControlService } from "@app/shared/helpers";
import { ReactiveFormService } from "@app/shared/helpers/reactive-form.service";
import { emailRegex, passwordRegex } from "@app/shared/inmutable/constants/regex";
import { AccountSpin } from "@app/shared/interfaces/common/account-spin";
import { Bank } from "@app/shared/interfaces/common/bank";
import { City } from "@app/shared/interfaces/common/city";
import { State } from "@app/shared/interfaces/common/state";
import { validateJuridicAndNarutalRut } from "@app/shared/validations/rut-juridic-natural.validator";
import { RutValidator } from "ng9-rut";
import { EmailValidator } from "src/app/shared/validations/email-validator";
import { PasswordValidator } from "src/app/shared/validations/password-validator";
import { environment } from "src/environments/environment";
import { BusinessRegisterStep } from "./shared/enums/business-register-step.enum";
import { AccountType } from "./shared/interfaces/account-type";
import { BusinessRegistrationDto } from "./shared/interfaces/business-registration-dto";

@Component({
  selector: "app-business-registration",
  templateUrl: "./business-registration.component.html",
  styleUrls: ["./business-registration.component.scss"],
})
export class BusinessRegistrationComponent implements OnInit, SafeFormData {
  public isLinear = environment.production;
  public cities: City[] = [];
  public states: State[] = [];
  public citiesForBranchs: City[] = [];
  public statesForBranchs: State[] = [];
  public banks: Bank[] = [];
  public accountSpins: AccountSpin[] = [];
  public accountType: AccountType[] = [];
  public rutRepresentanteLegal: string = null;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public isLoading = false;
  public hidePassword = true;
  public hideConfirmPassword = true;

  public get mainOfficeLocationCity(): AbstractControl {
    return this.secondFormGroup.get("mainOfficeLocationCity");
  }
  public get branchLocationCity(): AbstractControl {
    return this.secondFormGroup.get("branchLocationCity");
  }

  public constructor(
    private formBuilder: FormBuilder,
    private rutValidator: RutValidator,
    private territorialsService: TerritorialsService,
    private banksService: BankService,
    private BusinessService: BusinessService,
    private dialogService: DialogService,
    private formControlService: FormControlService,
    private reactiveFormService: ReactiveFormService
  ) {}

  @HostListener("document:keydown.F5", ["$event"])
  public handleKeyboardEvent(): void {
    this.saveFormData();
  }

  @HostListener("window:beforeunload", ["$event"])
  public unloadHandler(): void {
    this.saveFormData();
  }

  public ngOnInit(): void {
    this.initFirstFormGroup();
    this.initSecondFormGroup();
    this.initThirdFormGroup();
    this.getCities();
    this.getStates();
    this.getStatesForBranch();
    this.getBanks();
    this.getAccountType();
    this.getAccountSpins();
  }

  public initFirstFormGroup(): void {
    this.firstFormGroup = this.formBuilder.group(
      {
        managerName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        managerLastName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        managerPhone: ["", [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
        managerEmail: ["", [Validators.email, Validators.required, Validators.pattern(emailRegex)]],
        managerEmailConfirm: [
          "",
          [Validators.required, Validators.pattern(emailRegex), EmailValidator("managerEmail")],
        ],
        password: ["", [Validators.required, Validators.pattern(passwordRegex)]],
        passwordConfirm: ["", [Validators.required, PasswordValidator("password")]],
      },
      { updateOn: "blur" }
    );
    const step1 = localStorage.getItem(BusinessRegisterStep.STEP1);
    if (step1) {
      this.firstFormGroup.setValue(JSON.parse(step1));
    }
  }

  public initSecondFormGroup(): void {
    this.secondFormGroup = this.formBuilder.group({
      businessDescription: ["", [Validators.required, Validators.minLength(15), Validators.maxLength(280)]],
      legalRepresentativeName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      legalRepresentativeLastName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      legalRepresentativeRut: [
        "",
        [Validators.required, Validators.minLength(8), Validators.maxLength(9), this.rutValidator],
      ],
      legalRepresentativeEmail: ["", [Validators.email, Validators.required, Validators.pattern(emailRegex)]],
      legalRepresentativePhone: ["", [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      nameCompany: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      mainOfficeBusinessLine: ["", [Validators.required]],
      mainOfficeRutBusiness: [
        "",
        [Validators.required, Validators.minLength(9), Validators.maxLength(9), validateJuridicAndNarutalRut()],
      ],
      mainOfficeLocationAddress: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      mainOfficeLocationNumber: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      mainOfficePhone: ["", [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      mainOfficeLocationCity: ["0", [Validators.required, Validators.min(1)]],
      mainOfficeLocationState: ["0", [Validators.required, Validators.min(1)]],
      branchLocationAddress: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      branchLocationNumber: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      branchLocationCity: ["0", [Validators.required, Validators.min(1)]],
      branchLocationState: ["0", [Validators.required, Validators.min(1)]],
      branchHavePet: ["0"],
    });

    const step2 = localStorage.getItem(BusinessRegisterStep.STEP2);
    if (step2) {
      this.secondFormGroup.setValue(JSON.parse(step2));
    }
  }

  public initThirdFormGroup(): void {
    this.thirdFormGroup = this.formBuilder.group(
      {
        rutAccountOwner: [
          "",
          [Validators.required, Validators.minLength(8), Validators.maxLength(9), this.rutValidator],
        ],
        nameAccountOwner: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
        accountNumber: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
        bank: ["0", [Validators.required, Validators.min(1)]],
        accountType: ["0", [Validators.required, Validators.min(1)]],
      },
      { updateOn: "blur" }
    );
    const step3 = localStorage.getItem(BusinessRegisterStep.STEP3);
    if (step3) {
      this.thirdFormGroup.setValue(JSON.parse(step3));
    }
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
    });
  }

  public getStatesForBranch(): void {
    const idCity = this.secondFormGroup.get("branchLocationCity").value;
    this.territorialsService.getStates(idCity).subscribe((states) => {
      this.statesForBranchs = states;
    });
  }

  public getBanks(): void {
    this.banksService.getBanks().subscribe((banks) => (this.banks = banks));
  }

  public getAccountSpins(): void {
    this.BusinessService.getBusinessAccountSpin().subscribe((accountSpins) => (this.accountSpins = accountSpins));
  }

  public getAccountType(): void {
    this.BusinessService.getBusinessAccountType().subscribe((accountTypes) => (this.accountType = accountTypes));
  }

  public saveNewBusiness(): void {
    if (this.thirdFormGroup.invalid) return;

    const newBusiness = this.getBusinessData();

    this.isLoading = true;
    this.BusinessService.createNewBusiness(newBusiness).subscribe(
      () => {
        this.isLoading = false;
        this.showSuccessMessage();
        this.clearFormsFromLocalStorage();
        this.clearBusinessRegistrationForm();
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        if (error.status === 400) {
          let subtitle = "";
          error.error.details.forEach((element) => {
            subtitle += element + "\n";
          });
          const dialog: DialogModel = {
            isSuccessful: false,
            title: "Problemas con su registro.",
            subtitle: subtitle,
            messageButton: "Volver",
          };
          this.showErrorMessage(dialog);
        } else {
          const dialog: DialogModel = {
            isSuccessful: false,
            title: "Problemas con su registro.",
            subtitle: "Ha ocurrido un problema vuelva a intentarlo.",
            messageButton: "Volver",
          };
          this.showErrorMessage(dialog);
        }
      }
    );
  }

  public isDataSaved(): boolean {
    return this.firstFormGroup.dirty || this.secondFormGroup.dirty || this.thirdFormGroup.dirty;
  }
  public saveFormData(): void {
    if (this.firstFormGroup.dirty) {
      localStorage.setItem(BusinessRegisterStep.STEP1, JSON.stringify(this.firstFormGroup.value));
    }
    if (this.secondFormGroup.dirty) {
      localStorage.setItem(BusinessRegisterStep.STEP2, JSON.stringify(this.secondFormGroup.value));
    }
    if (this.thirdFormGroup.dirty) {
      localStorage.setItem(BusinessRegisterStep.STEP3, JSON.stringify(this.thirdFormGroup.value));
    }
  }

  private getBusinessData(): BusinessRegistrationDto {
    const newBusiness: BusinessRegistrationDto = {
      manager: {
        name: this.firstFormGroup.get("managerName").value,
        last_name: this.firstFormGroup.get("managerLastName").value,
        phone: this.firstFormGroup
          .get("managerPhone")
          .value.toString()
          .replace("(", "")
          .replace(")", "")
          .replace(/\s/g, ""),
        email: this.firstFormGroup.get("managerEmail").value,
        password: this.firstFormGroup.get("password").value,
      },
      legal_representative: {
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
      },
      branch: {
        street: this.secondFormGroup.get("branchLocationAddress").value,
        street_number: this.secondFormGroup.get("branchLocationNumber").value,
        accept_pet: this.secondFormGroup.get("branchHavePet").value == "1" ? true : false,
        state_id: this.secondFormGroup.get("branchLocationState").value,
      },
      restaurant: {
        identifier: this.secondFormGroup.get("mainOfficeRutBusiness").value,
        name: this.secondFormGroup.get("nameCompany").value,
        commercial_activity: this.secondFormGroup.get("mainOfficeBusinessLine").value,
        street: this.secondFormGroup.get("mainOfficeLocationAddress").value,
        street_number: this.secondFormGroup.get("mainOfficeLocationNumber").value,
        phone: this.secondFormGroup
          .get("mainOfficePhone")
          .value.toString()
          .replace("(", "")
          .replace(")", "")
          .replace(/\s/g, ""),
        state_id: this.secondFormGroup.get("mainOfficeLocationState").value,
        description: this.secondFormGroup.get("businessDescription").value,
      },
      branch_bank: {
        account_holder_identifier: this.thirdFormGroup.get("rutAccountOwner").value,
        account_holder_name: this.thirdFormGroup.get("nameAccountOwner").value,
        account_number: this.thirdFormGroup.get("accountNumber").value,
        bank_id: this.thirdFormGroup.get("bank").value,
        account_type: this.thirdFormGroup.get("accountType").value,
      },
    };
    return newBusiness;
  }

  private clearFormsFromLocalStorage(): void {
    localStorage.removeItem(BusinessRegisterStep.STEP1);
    localStorage.removeItem(BusinessRegisterStep.STEP2);
    localStorage.removeItem(BusinessRegisterStep.STEP3);
  }

  private clearBusinessRegistrationForm(): void {
    // TODO: Add number of phone
    this.reactiveFormService.clearAllFormControls(this.firstFormGroup);
    this.reactiveFormService.clearAllFormControls(this.secondFormGroup);
    this.reactiveFormService.clearAllFormControls(this.thirdFormGroup);
  }

  private showSuccessMessage(): void {
    const dialogModel: DialogModel = {
      title: "¡Felicidades!",
      subtitle: "Te has registrado exitosamente",
      isSuccessful: true,
      messageButton: "Entendido",
    };
    this.dialogService.openDialogSuccesRegister(dialogModel);
  }

  private showErrorMessage(dialogModel): void {
    this.dialogService.openDialog(dialogModel);
  }

  // #region First stepper validations
  public getManagerNameError(): string {
    return this.formControlService.getManagerNameError(this.firstFormGroup.get("managerName"));
  }

  public getManagerLastNameError(): string {
    return this.formControlService.getManagerLastNameError(this.firstFormGroup.get("managerLastName"));
  }

  public getManagerPhoneError(): string {
    return this.formControlService.getPhoneError(this.firstFormGroup.get("managerPhone"));
  }

  public getManagerEmailError(): string {
    return this.formControlService.getEmailError(this.firstFormGroup.get("managerEmail"));
  }

  public getManagerEmailConfirmError(): string {
    return this.formControlService.getEmailConfirmError(this.firstFormGroup.get("managerEmailConfirm"));
  }

  public getPasswordError(): string {
    return this.formControlService.getPasswordError(this.firstFormGroup.get("password"));
  }

  public getPasswordConfirmError(): string {
    return this.formControlService.getPasswordConfirmError(this.firstFormGroup.get("passwordConfirm"));
  }
  // #endregion First stepper validations

  // #region Second stepper validations

  public getBusinessDescriptionError(): string {
    return this.formControlService.getBusinessDescriptionError(this.secondFormGroup.get("businessDescription"));
  }

  public getLegalRepresentativeNameError(): string {
    return this.formControlService.getNameError(this.secondFormGroup.get("legalRepresentativeName"));
  }

  public getLegalRepresentativeLastNameError(): string {
    return this.formControlService.getLastNameError(this.secondFormGroup.get("legalRepresentativeLastName"));
  }

  public getLegalRepresentativeRutError(): string {
    return this.formControlService.getRutError(this.secondFormGroup.get("legalRepresentativeRut"));
  }

  public getLegalRepresentativeEmailError(): string {
    return this.formControlService.getEmailError(this.secondFormGroup.get("legalRepresentativeEmail"));
  }

  public getLegalRepresentativePhoneError(): string {
    return this.formControlService.getPhoneError(this.secondFormGroup.get("legalRepresentativePhone"));
  }

  public getnameCompanyError(): string {
    return this.formControlService.getNameCompanyError(this.secondFormGroup.get("nameCompany"));
  }

  public getMainOfficeBusinessLineError(): string {
    return this.formControlService.getMainOfficeBusinessLineError(this.secondFormGroup.get("mainOfficeBusinessLine"));
  }

  public getMainOfficeRutBusinessError(): string {
    return this.formControlService.getJuridicRutError(this.secondFormGroup.get("mainOfficeRutBusiness"));
  }

  public getMainOfficeLocationAddressError(): string {
    return this.formControlService.getAddressError(this.secondFormGroup.get("mainOfficeLocationAddress"));
  }

  public getMainOfficeLocationNumberError(): string {
    return this.formControlService.getLocationNumberError(this.secondFormGroup.get("mainOfficeLocationNumber"));
  }

  public getMainOfficePhoneError(): string {
    return this.formControlService.getPhoneError(this.secondFormGroup.get("mainOfficePhone"));
  }

  public getMainOfficeLocationCityError(): string {
    return this.formControlService.getLocationCityError(this.secondFormGroup.get("mainOfficeLocationCity"));
  }

  public getMainOfficeLocationStateError(): string {
    return this.formControlService.getLocationStateError(this.secondFormGroup.get("mainOfficeLocationState"));
  }

  public getNameCompanyError(): string {
    return this.formControlService.getNameCompanyError(this.secondFormGroup.get("nameCompany"));
  }

  public getBranchLocationAddressError(): string {
    return this.formControlService.getAddressError(this.secondFormGroup.get("branchLocationAddress"));
  }

  public getBranchLocationNumberError(): string {
    return this.formControlService.getLocationNumberError(this.secondFormGroup.get("branchLocationNumber"));
  }

  public getBranchLocationCityError(): string {
    return this.formControlService.getLocationCityError(this.secondFormGroup.get("branchLocationCity"));
  }

  public getBranchLocationStateError(): string {
    return this.formControlService.getLocationStateError(this.secondFormGroup.get("branchLocationState"));
  }

  // #endregion Second stepper validations

  // #region Third stepper validations
  public getRutAccountOwnerError(): string {
    return this.formControlService.getRutError(this.thirdFormGroup.get("rutAccountOwner"));
  }

  public getNameAccountOwnerError(): string {
    return this.formControlService.getNameAccountOwnerError(this.thirdFormGroup.get("nameAccountOwner"));
  }

  public getAccountNumberError(): string {
    return this.formControlService.getAccountNumberError(this.thirdFormGroup.get("accountNumber"));
  }

  public getBankError(): string {
    return this.formControlService.getBankError(this.thirdFormGroup.get("bank"));
  }

  public getAccountTypeError(): string {
    return this.formControlService.getAccountTypeError(this.thirdFormGroup.get("accountType"));
  }
  // #endregion Third stepper validations
}
