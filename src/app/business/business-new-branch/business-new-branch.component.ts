import { Component, HostListener, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BankService } from "@app/core/services/bank.service";
import { BusinessService } from "@app/business/shared/services/business.service";
import { TerritorialsService } from "@app/core/services/territorials.service";
import { RutValidator } from "ng9-rut";
import { emailRegex, passwordRegex } from "@app/shared/inmutable/constants/regex";
import { Bank } from "@app/shared/interfaces/common/bank";
import { City } from "@app/shared/interfaces/common/city";
import { State } from "@app/shared/interfaces/common/state";
import { EmailValidator } from "src/app/shared/validations/email-validator";
import { PasswordValidator } from "src/app/shared/validations/password-validator";
import { environment } from "src/environments/environment";
import { BranchRegistrationDto } from "./shared/interfaces/business-registration-dto";
import { FormControlService } from "@app/shared/helpers";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";
import { errorContent } from "@app/shared/components/dialog/shared/inmutable/constants/dialog-message";
import { DialogModel } from "@app/shared/components/dialog/shared/interfaces/dialog-model";
import { AccountType } from "../business-registration/shared/interfaces/account-type";
import { BusinessNewBranchStep } from "./shared/enums/business-new-branch-step.enum";
import { SafeFormData } from "@app/shared/guard/form-save.guard";

@Component({
  selector: "app-business-new-branch",
  templateUrl: "./business-new-branch.component.html",
  styleUrls: ["./business-new-branch.component.scss"],
})
export class BusinessNewBranchComponent implements OnInit, SafeFormData {
  public isLinear = environment.production;
  public citiesForBranchs: City[] = [];
  public statesForBranchs: State[] = [];
  public banks: Bank[] = [];
  public accountType: AccountType[] = [];
  public rutRepresentanteLegal: string = null;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public isLoading = false;
  public hidePassword = true;
  public hideConfirmPassword = true;

  @HostListener("document:keydown.F5", ["$event"])
  public handleKeyboardEvent(): void {
    this.saveFormData();
  }

  @HostListener("window:beforeunload", ["$event"])
  public unloadHandler(): void {
    this.saveFormData();
  }

  public constructor(
    private formBuilder: FormBuilder,
    private rutValidator: RutValidator,
    private territorialsService: TerritorialsService,
    private banksService: BankService,
    private BusinessService: BusinessService,
    private dialogService: DialogService,
    private formControlService: FormControlService
  ) {}

  public isDataSaved(): boolean {
    return this.firstFormGroup.dirty || this.secondFormGroup.dirty;
  }

  public saveFormData(): void {
    if (this.firstFormGroup.dirty) {
      localStorage.setItem(BusinessNewBranchStep.STEP1, JSON.stringify(this.firstFormGroup.value));
    }
    if (this.secondFormGroup.dirty) {
      localStorage.setItem(BusinessNewBranchStep.STEP2, JSON.stringify(this.secondFormGroup.value));
    }
  }

  public ngOnInit(): void {
    this.initFirstFormGroup();
    this.initSecondFormGroup();
    this.initThirdFormGroup();
    this.getCities();
    this.getStatesForBranch();
    this.getBranchLocationStateError();
    this.getBanks();
    this.getAccountType();
  }

  public get branchLocationCity(): AbstractControl {
    return this.secondFormGroup.get("branchLocationCity");
  }

  public initFirstFormGroup(): void {
    this.firstFormGroup = this.formBuilder.group({
      managerName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      managerLastName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      managerPhone: ["", [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      managerEmail: ["", [Validators.email, Validators.required, Validators.pattern(emailRegex)]],
      managerEmailConfirm: ["", [Validators.required, Validators.pattern(emailRegex), EmailValidator("managerEmail")]],
      password: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      passwordConfirm: ["", [Validators.required, PasswordValidator("password")]],
    });
    const step1 = localStorage.getItem(BusinessNewBranchStep.STEP1);
    if (step1) {
      this.firstFormGroup.setValue(JSON.parse(step1));
    }
  }

  public initSecondFormGroup(): void {
    this.secondFormGroup = this.formBuilder.group({
      branchLocationAddress: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      branchLocationNumber: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      branchLocationCity: ["0", [Validators.required, Validators.min(1)]],
      branchLocationState: ["0", [Validators.required, Validators.min(1)]],
      branchHavePet: ["0"],
    });
    const step2 = localStorage.getItem(BusinessNewBranchStep.STEP2);
    if (step2) {
      this.secondFormGroup.setValue(JSON.parse(step2));
    }
  }

  public initThirdFormGroup(): void {
    this.thirdFormGroup = this.formBuilder.group({
      rutAccountOwner: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(9), this.rutValidator]],
      nameAccountOwner: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      accountNumber: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      bank: ["0", [Validators.required, Validators.min(1)]],
      accountType: ["0", [Validators.required, Validators.min(1)]],
    });
    const step3 = localStorage.getItem(BusinessNewBranchStep.STEP3);
    if (step3) {
      this.thirdFormGroup.setValue(JSON.parse(step3));
    }
  }

  public getCities(): void {
    this.territorialsService.getCities(1).subscribe((cities) => (this.citiesForBranchs = cities));
  }

  public getStatesForBranch(): void {
    const idCity = this.secondFormGroup.get("branchLocationCity").value;
    this.territorialsService.getStates(idCity).subscribe((states) => {
      this.statesForBranchs = states;
      this.secondFormGroup.get("branchLocationState").setValue("0");
    });
  }

  public getBanks(): void {
    this.banksService.getBanks().subscribe((banks) => (this.banks = banks));
  }

  public getAccountType(): void {
    this.BusinessService.getBusinessAccountType().subscribe((accountTypes) => (this.accountType = accountTypes));
  }

  public saveNewBusiness(): void {
    if (this.thirdFormGroup.invalid) return;

    const newBusiness = this.getBusinessData();

    this.isLoading = true;
    this.BusinessService.createNewBranch(newBusiness).subscribe(
      (x) => {
        this.isLoading = false;
        this.showSuccessMessage();
        this.clearFormsFromLocalStorage();
      },
      (error) => {
        this.isLoading = false;
        let subtitle = "";
        error.error.details.forEach((element) => {
          subtitle += element + "\n";
        });
        if (error.status === 400) {
          const dialog: DialogModel = {
            isSuccessful: false,
            title: "Problemas con su registro.",
            subtitle: subtitle,
            messageButton: "Volver",
          };
          this.showErrorMessage(dialog);
        }
      }
    );
  }

  private getBusinessData(): BranchRegistrationDto {
    const newBusiness: BranchRegistrationDto = {
      manager: {
        name: this.firstFormGroup.get("managerName").value,
        last_name: this.firstFormGroup.get("managerLastName").value,
        email: this.firstFormGroup.get("managerEmail").value,
        phone: this.firstFormGroup
          .get("managerPhone")
          .value.toString()
          .replace("(", "")
          .replace(")", "")
          .replace(/\s/g, ""),
        password: this.firstFormGroup.get("password").value,
      },
      branch: {
        name: null,
        street: this.secondFormGroup.get("branchLocationAddress").value,
        street_number: this.secondFormGroup.get("branchLocationNumber").value,
        accept_pet: this.secondFormGroup.get("branchHavePet").value == "1" ? true : false,
        state_id: this.secondFormGroup.get("branchLocationState").value,
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

  private showSuccessMessage() {
    const dialogModel: DialogModel = {
      title: "¡Felicidades!",
      subtitle: "Te has registrado exitosamente",
      isSuccessful: true,
      messageButton: "Entendido",
    };

    this.dialogService.openDialogSuccesRegister(dialogModel);
  }

  private clearFormsFromLocalStorage(): void {
    localStorage.removeItem(BusinessNewBranchStep.STEP1);
    localStorage.removeItem(BusinessNewBranchStep.STEP2);
    localStorage.removeItem(BusinessNewBranchStep.STEP3);
  }

  private showErrorMessage(dialog?) {
    this.dialogService.openDialog(dialog ? dialog : errorContent);
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
