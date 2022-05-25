import { AbstractControl, ValidatorFn } from "@angular/forms";

export function validateJuridicAndNarutalRut(): ValidatorFn {
  const maxValueOfJuridicNaturalRut = 120000000;
  const minValueOfJuridicNaturalRut = 50000000;

  return (control: AbstractControl): { [key: string]: { value: string } } | null => {
    const rut = control.value;
    const rutSinVerificador = rut.substring(0, rut.length - 1);
    const isInvalidJuridicRut =
      +rutSinVerificador >= minValueOfJuridicNaturalRut && +rutSinVerificador <= maxValueOfJuridicNaturalRut ? false : true;
    return isInvalidJuridicRut ? { invalidJuridicRut: { value: control.value } } : null;
  };
}
