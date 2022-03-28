import { Injectable } from "@angular/core";
import { MatButtonType, TypeButtonClass } from "../types/button-types";

@Injectable()
export class ButtonService {
  public constructor() {}

  public getMaterialButtonClass(buttonMaterialType: MatButtonType): MatButtonType {
    let materialButtonTypeSelected: MatButtonType;
    switch (buttonMaterialType) {
      case "mat-button":
        materialButtonTypeSelected = buttonMaterialType;
        break;
      case "mat-stroked-button":
        materialButtonTypeSelected = buttonMaterialType;
        break;
      case "mat-raised-button":
        materialButtonTypeSelected = buttonMaterialType;
        break;
      case "mat-fab":
        materialButtonTypeSelected = buttonMaterialType;
        break;
      case "mat-flat-button":
        materialButtonTypeSelected = buttonMaterialType;
        break;
      case "mat-mini-fab":
        materialButtonTypeSelected = buttonMaterialType;
        break;
      default:
        materialButtonTypeSelected = buttonMaterialType;
        break;
    }
    return materialButtonTypeSelected;
  }

  public getTypeButtonClass(typeButtonClass: TypeButtonClass): string {
    let typeButtonClassSelected: TypeButtonClass;
    switch (typeButtonClass) {
      case "btn-close":
        typeButtonClassSelected = typeButtonClass;
        break;
      case "btn-disabled":
        typeButtonClassSelected = typeButtonClass;
        break;
      case "btn-facebook":
        typeButtonClassSelected = typeButtonClass;
        break;
      case "btn-google":
        typeButtonClassSelected = typeButtonClass;
        break;
      case "btn-normal":
        typeButtonClassSelected = typeButtonClass;
        break;
      case "btn-normal-red":
        typeButtonClassSelected = typeButtonClass;
        break;
      case "btn-submit":
        typeButtonClassSelected = typeButtonClass;
        break;
      default:
        typeButtonClassSelected = typeButtonClass;
        break;
    }
    return typeButtonClassSelected;
  }
}
