import { TypeButton, MatButtonType, TypeButtonClass } from "../types/button-types";

export interface ButtonCustom {
  buttonMaterialType: MatButtonType;
  buttonType?: TypeButton;
  buttonTypeClass?: TypeButtonClass;
  extraClasses?: string;
  isValidForm?:boolean;
  isDisabled?: boolean;
}
