import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ButtonCustom } from "@app/shared/controls/customs/buttons/shared/interfaces/button-custom";

@Component({
  selector: "app-activation",
  templateUrl: "./activation.component.html",
  styleUrls: ["./activation.component.scss"],
})
export class ActivationComponent implements OnInit {
  public token: string = null;
  public custombutton: ButtonCustom = {
    buttonMaterialType: 'mat-raised-button',
    buttonType: 'submit',
    buttonTypeClass: 'btn-submit'
  }

  public constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router) {}

  public ngOnInit(): void {
    this.setTokenFromQueryParams();
  }

  private setTokenFromQueryParams(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.token = params.get("token");
    });
  }
}
