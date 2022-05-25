import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { ErrorMessages } from "../inmutable/enums/error-message.enum";

@Injectable({
  providedIn: "root",
})
export class FormControlService {
  public constructor() {}

  public getPasswordError(passwordControl: AbstractControl): string {
    return passwordControl.hasError("required")
      ? "Debe ingresar una contraseña"
      : passwordControl.hasError("pattern")
      ? "Debe tener como mínimo 8 dígitos, 1 mayúscula y 1 número"
      : null;
  }

  public getPasswordConfirmError(passwordControl: AbstractControl): string {
    return passwordControl.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "contraseña")
      : passwordControl.hasError("notMatch")
      ? ErrorMessages.PasswordDoesntMatch
      : null;
  }

  public getEmailError(EmailControl: AbstractControl): string {
    return EmailControl.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "email")
      : EmailControl.hasError("email")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : EmailControl.hasError("pattern")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : null;
  }

  public getEmailConfirmError(EmailControl: AbstractControl): string {
    return EmailControl.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "email")
      : EmailControl.hasError("notMatch")
      ? ErrorMessages.EmailDoesntMatch
      : EmailControl.hasError("email")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : EmailControl.hasError("pattern")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : null;
  }

  public getNameError(ClientNameControl: AbstractControl): string {
    return ClientNameControl.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "nombre")
      : ClientNameControl.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "2")
      : ClientNameControl.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "30")
      : null;
  }

  public getLastNameError(ClientLastNameControl: AbstractControl): string {
    return ClientLastNameControl.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "apellido")
      : ClientLastNameControl.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "2")
      : ClientLastNameControl.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "30")
      : null;
  }

  public getClientPhoneError(ClientPhoneControl: AbstractControl): string {
    return ClientPhoneControl.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "teléfono válido")
      : ClientPhoneControl.hasError("maxlength")
      ? ErrorMessages.Invalid.replace("{0}", "número")
      : null;
  }

  public getBirthDateError(BirthDateControl: AbstractControl): string {
    return BirthDateControl.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "fecha de nacimiento")
      : null;
  }

  public getProductNameError(productNameControl: AbstractControl): string {
    return productNameControl.hasError("required")
      ? "Debe ingresar un nombre"
      : productNameControl.hasError("minlength")
      ? "Debe tener mínimo 3 caracteres"
      : productNameControl.hasError("maxlength")
      ? "Debe tener máximo 50 caracteres"
      : null;
  }

  public getProductPriceError(productPriceControl: AbstractControl): string {
    return productPriceControl.hasError("required")
      ? "Debe ingresar un precio"
      : productPriceControl.hasError("min")
      ? "El valor mínimo es de $100"
      : productPriceControl.hasError("max")
      ? "El valor máximo es $100.000"
      : null;
  }

  public getProductDescriptionError(productDescriptionControl: AbstractControl): string {
    return productDescriptionControl.hasError("required")
      ? "Debe ingresar una descripción"
      : productDescriptionControl.hasError("minlength")
      ? "Debe tener mínimo 10 caracteres"
      : productDescriptionControl.hasError("maxlength")
      ? "Debe tener máximo 400 caracteres"
      : null;
  }

  public getManagerNameError(ManagerNameControl: AbstractControl): string {
    return ManagerNameControl.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "nombre")
      : ManagerNameControl.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "2")
      : ManagerNameControl.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }

  public getManagerLastNameError(ManagerLastNameControl: AbstractControl): string {
    return ManagerLastNameControl.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "apellido")
      : ManagerLastNameControl.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "2")
      : ManagerLastNameControl.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "30")
      : null;
  }

  public getPhoneError(ManagerPhoneControl: AbstractControl): string {
    return ManagerPhoneControl.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "número")
      : ManagerPhoneControl.hasError("minlength")
      ? ErrorMessages.Invalid.replace("{0}", "número")
      : ManagerPhoneControl.hasError("maxlength")
      ? ErrorMessages.Invalid.replace("{0}", "número")
      : null;
  }

  public getAddressError(LocationAddressControl: AbstractControl): string {
    return LocationAddressControl.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "calle")
      : LocationAddressControl.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "5")
      : LocationAddressControl.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }

  public getLocationNumberError(LocationNumberControl: AbstractControl): string {
    return LocationNumberControl.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "número de calle")
      : LocationNumberControl.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "1")
      : LocationNumberControl.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "20")
      : null;
  }

  public getLocationCityError(LocationCityControl: AbstractControl): string {
    return LocationCityControl.hasError("required")
      ? ErrorMessages.RequiredSelectVariant.replace("{0}", "región")
      : LocationCityControl.hasError("min")
      ? ErrorMessages.RequiredSelectVariant.replace("{0}", "región")
      : null;
  }

  public getLocationStateError(LocationStateControl: AbstractControl): string {
    return LocationStateControl.hasError("required")
      ? ErrorMessages.RequiredSelectVariant.replace("{0}", "comuna")
      : LocationStateControl.hasError("min")
      ? ErrorMessages.RequiredSelectVariant.replace("{0}", "comuna")
      : null;
  }

  public getRutError(RutAccountOwnerControl: AbstractControl): string {
    return RutAccountOwnerControl.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "rut")
      : RutAccountOwnerControl.hasError("minlength")
      ? ErrorMessages.Invalid.replace("{0}", "rut")
      : RutAccountOwnerControl.hasError("maxlength")
      ? ErrorMessages.Invalid.replace("{0}", "rut")
      : RutAccountOwnerControl.hasError("invalidRut")
      ? ErrorMessages.Invalid.replace("{0}", "rut")
      : null;
  }

  public getJuridicRutError(RutAccountOwnerControl: AbstractControl): string {
    return RutAccountOwnerControl.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "rut")
      : RutAccountOwnerControl.hasError("minlength")
      ? ErrorMessages.Invalid.replace("{0}", "rut")
      : RutAccountOwnerControl.hasError("maxlength")
      ? ErrorMessages.Invalid.replace("{0}", "rut")
      : RutAccountOwnerControl.hasError("invalidJuridicRut")
      ? ErrorMessages.Invalid.replace("{0}", "rut")
      : null;
  }

  public getNameAccountOwnerError(NameAccountOwnerControl: AbstractControl): string {
    return NameAccountOwnerControl.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "nombre de titular")
      : NameAccountOwnerControl.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "5")
      : NameAccountOwnerControl.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }

  public getAccountNumberError(AccountNumberControl: AbstractControl): string {
    return AccountNumberControl.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "número de cuenta")
      : AccountNumberControl.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "4")
      : AccountNumberControl.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "20")
      : null;
  }

  public getBankError(BankControl: AbstractControl): string {
    return BankControl.hasError("required")
      ? ErrorMessages.RequiredSelect.replace("{0}", "banco")
      : BankControl.hasError("min")
      ? ErrorMessages.RequiredSelect.replace("{0}", "banco")
      : null;
  }

  public getAccountTypeError(AccountTypeControl: AbstractControl): string {
    return AccountTypeControl.hasError("required")
      ? ErrorMessages.RequiredSelect.replace("{0}", "tipo de cuenta")
      : AccountTypeControl.hasError("min")
      ? ErrorMessages.RequiredSelect.replace("{0}", "tipo de cuenta")
      : null;
  }

  public getBusinessDescriptionError(BusinessDescriptionControl: AbstractControl): string {
    return BusinessDescriptionControl.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "descripción")
      : BusinessDescriptionControl.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "12")
      : BusinessDescriptionControl.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "250")
      : null;
  }

  public getMainOfficeBusinessLineError(MainOfficeBusinessLineControl: AbstractControl): string {
    return MainOfficeBusinessLineControl.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "giro")
      : MainOfficeBusinessLineControl.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "5")
      : MainOfficeBusinessLineControl.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }

  public getNameCompanyError(NameCompanyControl: AbstractControl): string {
    return NameCompanyControl.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "nombre de local")
      : NameCompanyControl.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "5")
      : NameCompanyControl.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }
}
