import { Pipe, PipeTransform } from "@angular/core";
import { ButtonService } from "../helpers/button.service";
import { ButtonCustom } from "../interfaces/button-custom";
import { MatButtonType, TypeButtonClass } from "../types/button-types";

@Pipe({
  name: "customButtonPipe",
})
export class CustomButtonPipe implements PipeTransform {
  public constructor(private buttonService: ButtonService) {}
  public transform(buttonCustom: ButtonCustom): string {
    const materialButtonTypeSelected: MatButtonType = this.buttonService.getMaterialButtonClass(
      buttonCustom.buttonMaterialType
    );
    const buttonType = this.getTypeButton(buttonCustom.isValidForm, buttonCustom.buttonTypeClass);
    const buttonClasses = buttonType + " " + materialButtonTypeSelected + " " + buttonCustom.extraClasses;
    return buttonClasses;
  }

  private getTypeButton(invalid: boolean, typeButton: TypeButtonClass): string {
    return invalid ? "btn-disabled" : this.buttonService.getTypeButtonClass(typeButton);
  }
}
