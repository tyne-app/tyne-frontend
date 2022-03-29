import { Component, Input } from "@angular/core";
import { ButtonCustom } from "../shared/interfaces/button-custom";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Input() public buttonCustomConfiguration!: ButtonCustom;
}
