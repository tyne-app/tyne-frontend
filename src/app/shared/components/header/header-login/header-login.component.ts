import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { TokenService } from "@app/auth/shared/helpers/token.service";
import { Token } from "@app/auth/shared/interfaces/token";
import { SignOffComponent } from "@app/auth/sign-off/sign-off.component";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";
import { UserType } from "@app/shared/inmutable/enums/user-type.enum";

@Component({
  selector: "app-header-login",
  templateUrl: "./header-login.component.html",
  styleUrls: ["./header-login.component.scss"],
})
export class HeaderLoginComponent implements OnInit {
  public menu: Map<string, string>;
  public token: Token = null;

  private menuNavigation = new Map<string, () => void>([
    ["Inicio", (): void => this.goToRoute(TyneRoutes.Home)],
    ["Perfil-Cliente", (): void => this.goToRoute(TyneRoutes.ClientProfile)],
    ["Perfil-Local", (): void => this.goToRoute(TyneRoutes.BusinessProfile)],
    ["Reservas-Pendientes", (): void => this.goToRoute(TyneRoutes.ClientPendingReservation)],
    ["Reservas", (): void => this.goToRoute(TyneRoutes.BusinessHome)],
    ["Menu", (): void => this.goToRoute(TyneRoutes.BusinessEditMenu)],
    ["Sucursal", (): void => this.goToRoute(TyneRoutes.BusinessNewBranch)],
    ["Cerrar-Sesion", (): void => this.openSignOffDialog()],
  ]);

  public constructor(private router: Router, private tokenService: TokenService, private dialog: MatDialog) {}

  public ngOnInit(): void {
    this.getUserData();
  }

  public asIsOrder(a, b): number {
    return 1;
  }

  public onNavigate(option: string): void {
    this.menuNavigation.get(option)();
  }

  private getUserData() {
    this.token = this.tokenService.getDecodedJwtToken();
    if (this.token) {
      this.getMenuUser();
    }
  }

  private getMenuUser() {
    if (this.token.rol === UserType.Customer) {
      this.menu = new Map<string, string>()
        .set("Inicio", "Inicio")
        .set("Perfil-Cliente", "Perfil")
        .set("Reservas-Pendientes", "Reservas Pendientes")
        .set("Cerrar-Sesion", "Cerrar Sesión");
    } else {
      this.menu = new Map<string, string>()
        .set("Reservas", "Reservas")
        .set("Perfil-Local", "Perfil")
        .set("Menu", "Carta / Menú")
        .set("Sucursal", "Agregar sucursal")
        .set("Cerrar-Sesion", "Cerrar Sesión");
    }
  }

  private goToRoute(routename: string): void {
    this.router.navigate([`/${routename}`]);
  }

  public openSignOffDialog(): void {
    const dialogRef = this.dialog.open(SignOffComponent, {
      maxWidth: "50%",
      minWidth: "50%",
      panelClass: "",
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
