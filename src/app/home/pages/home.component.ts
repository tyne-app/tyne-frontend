import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogModel } from "src/app/shared/components/components/dialog/models/dialog-model";
import { DialogComponent } from "src/app/shared/components/components/dialog/pages/dialog.component";
import { TyneRoutes } from "src/app/shared/constants/url-routes";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public constructor(public dialog: MatDialog) {}

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

    this.dialog.open(DialogComponent, {
      data: dialogModel,
      maxWidth: "95%",
      minWidth: "55%",
      panelClass: "dialog",
    });
  }
}
