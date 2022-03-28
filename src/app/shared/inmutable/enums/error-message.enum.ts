export enum ErrorMessages {
  ServerDown = "Tenemos problemas técnicos, intente más tarde",
  GenericError = "Ha ocurrido un problema, intente nuevamente",
  WeAreSorry = "¡Lo sentimos!",
  AccounAlreadyExist = "Ya existe una cuenta con estos datos",
  RequestFailed = "No hemos podido completar el registro",
  UnregisteredUser = "Aún no te haz registrado",

  // #region Input and form errors

  FormNotReady = "Debe completar todos los datos",
  Required = "Debe ingresar un {0}",
  RequiredVariant = "Debe ingresar una {0}",
  RequiredSelect = "Debe seleccionar un {0}",
  RequiredSelectVariant = "Debe seleccionar una {0}",
  Invalid = "Debe ingresar un {0} válido",
  InvalidVariant = "Debe ingresar una {0} válida",
  Minlength = "Debe tener mínimo {0} caracteres",
  Maxlength = "Debe tener máximo {0} caracteres",
  Min = "El valor mínimo es de {0}",
  Max = "El valor máximo es de {0}",
  PasswordPattern = "Debe tener como mínimo 8 dígitos, 1 mayúscula y 1 número",
  PasswordDoesntMatch = "La contraseña no coincide",
  EmailDoesntMatch = "El email no coincide",
 
  // #endregion
}
