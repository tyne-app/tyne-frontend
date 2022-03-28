import { AbstractControl, ValidatorFn } from "@angular/forms";

export function validateJuridicAndNarutalRut(): ValidatorFn {
  const maxValueOfJuridicNaturalRut = 800000000;
  const minValueOfJuridicNaturalRut = 500000000;

  return (control: AbstractControl): { [key: string]: { value: string } } | null => {
    const rut = control.value;
    const isInvalidJuridicRut =
      +rut >= minValueOfJuridicNaturalRut && +rut <= maxValueOfJuridicNaturalRut ? false : true;
    return isInvalidJuridicRut ? { invalidJuridicRut: { value: control.value } } : null;
  };
}
