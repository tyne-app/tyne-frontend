import { Directive, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: "[time]",
})
export class TimeDirective {
  public constructor(public ngControl: NgControl) {}

  @HostListener("ngModelChange", ["$event"])
  public onModelChange(event): void {
    this.onInputChange(event, false);
  }

  @HostListener("keydown.backspace", ["$event"])
  public keydownBackspace(event): void {
    this.onInputChange(event.target.value, true);
  }

  public onInputChange(event, backspace: boolean): void {
    let newVal = event.replace(/\D/g, "");

    if (backspace && newVal.length <= 3) {
      newVal = newVal.substring(0, newVal.length - 1);
    }

    if (newVal.length === 0) {
      newVal = null;
    } else if (newVal.length <= 2) {
      newVal = newVal.replace(/^(\d{0,2})/, "$1");
    } else if (newVal.length <= 4) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,1})/, "$1:$2");
    } else {
      newVal = newVal.substring(0, 4);
      newVal = newVal.replace(/^(\d{0,2})(\d{0,1})/, "$1:$2");
    }

    this.ngControl.valueAccessor.writeValue(newVal);
  }
}
