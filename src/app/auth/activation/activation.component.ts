import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "@app/core/services/user.service";
import { DialogModel } from "@app/shared/components/dialog/shared/interfaces/dialog-model";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";
import { ButtonCustom } from "@app/shared/controls/customs/buttons/shared/interfaces/button-custom";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";

@Component({
  selector: "app-activation",
  templateUrl: "./activation.component.html",
  styleUrls: ["./activation.component.scss"],
})
export class ActivationComponent implements OnInit {
  public token: string = null;
  public custombutton: ButtonCustom = {
    buttonMaterialType: "mat-raised-button",
    buttonType: "submit",
    buttonTypeClass: "btn-submit",
  };

  public constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UserService,
    private router: Router,
    private dialogService: DialogService
  ) {}

  public ngOnInit(): void {
    this.setTokenFromQueryParams();
  }

  private setTokenFromQueryParams(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.token = params.get("token");
      this.usersService.activation(this.token).subscribe(
        (response) => {
          this.router.navigate(["/" + TyneRoutes.Home]);
          const dialog: DialogModel = {
            isSuccessful: false,
            title: "Activación de cuenta.",
            subtitle: response.message,
            messageButton: "Volver",
          };
          this.showErrorMessage(dialog);
        },
        (error: HttpErrorResponse) => {
          this.router.navigate(["/" + TyneRoutes.Home]);
          let dialog: DialogModel = {
            isSuccessful: false,
            title: "Ha ocurrido un problema.",
            subtitle: "Ha ocurrido un problema vuelva a intentarlo.",
            messageButton: "Volver",
          };
          if (error.status === 400 || error.status === 401) {
            let subtitle = "";
            if (Array.isArray(error.error.details)) {
              error.error.details.forEach((element) => {
                subtitle += element + "\n";
              });
            } else {
              subtitle = error.error.details;
            }
            dialog = {
              isSuccessful: false,
              title: "Activación de cuenta.",
              subtitle: subtitle,
              messageButton: "Volver",
            };
          }
          if (error.status == 401) {
            this.retyrActivation(params.get("token"));
          }
          this.showErrorMessage(dialog);
        }
      );
    });
  }

  private retyrActivation(token: string) {
    this.usersService.retryActivation(token).subscribe();
  }

  private showErrorMessage(dialogModel: DialogModel): void {
    this.dialogService.openDialog(dialogModel);
  }
}
