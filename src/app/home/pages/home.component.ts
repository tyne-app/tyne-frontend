import { Component, OnInit } from "@angular/core";
import { DialogModel } from "src/app/shared/components/components/dialog/models/dialog-model";
import { DialogService } from "src/app/shared/components/components/dialog/services/dialog.service";
import { TyneRoutes } from "src/app/shared/constants/url-routes";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public constructor(private dialogService: DialogService) {}

  public ngOnInit(): void {
    this.open();
  }

  public open(): void {
    const dialogModel: DialogModel = {
      title: "¡Se ha registrado exitosamente!",
      subtitle: "Le hemos enviado un mensaje de bienvenida",
      isSuccessful: false,
      messageButton: "Volver",
      redirectTo: TyneRoutes.Privacity,
    };

    this.dialogService.openDialog(dialogModel);
  }
}
