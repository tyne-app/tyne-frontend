import { FormControl } from "@angular/forms";

export class DateValidator {
  public static validator(control: FormControl): { [s: string]: boolean } {
    if (control.value) {
      const date = new Date(control.value).setHours(0, 0, 0, 0);
      const today = new Date().setHours(0, 0, 0, 0);

      if (date < today) {
        return { invalidDate: true };
      }
    }

    return null;
  }

  public static timeRegex(): RegExp {
    return RegExp(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/);
  }
}
