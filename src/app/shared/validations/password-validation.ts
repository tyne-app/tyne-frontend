import { AbstractControl } from "@angular/forms";

/**
 * @deprecated The method should not be used
 */
export class PasswordValidation {
  static MatchPassword(AC: AbstractControl) {
    const password = AC.get("newPassword").value;
    const confirmPassword = AC.get("confirmPassword").value;
    if (password != confirmPassword) {
      AC.get("confirmPassword").setErrors({ MatchPassword: true });
    } else {
      return null;
    }
  }
}
