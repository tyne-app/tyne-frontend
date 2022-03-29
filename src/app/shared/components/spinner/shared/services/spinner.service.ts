import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: "root",
})
export class SpinnerService {

  public constructor(
    private ngxSpinnerService: NgxSpinnerService
  ) {}

  public callSpinner(): void{
    this.ngxSpinnerService.show();
  }

  public stopSpinner(): void{
    this.ngxSpinnerService.hide();
  }

}
