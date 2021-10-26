import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenService } from "@app/core/helpers/token.service";
import { ClientService } from "@app/core/services/client.service";
import { UserType } from "@app/shared/inmutable/enums/user_type.enum";
import { TyneRoutes } from "src/app/shared/inmutable/enums/url-routes";
import { Token } from "src/app/shared/interfaces/token";

@Component({
  selector: "app-header-login",
  templateUrl: "./header-login.component.html",
  styleUrls: ["./header-login.component.scss"],
})
export class HeaderLoginComponent implements OnInit {
  public menu: Map<number, string>;
  public token: Token = null;

  public constructor(
    private router: Router,
    private clientService: ClientService,
    private tokenService: TokenService
  ) {}

  public ngOnInit(): void {
    this.getUserData();
  }

  public asIsOrder(a, b): number {
    return 1;
  }

  public onNavigate(option: number): void {
    switch (option) {
      case 1:
        this.goToRoute(TyneRoutes.ClientProfile);
        break;
      case 2:
        this.goToRoute(TyneRoutes.FavouriteLocal);
        break;
      case 3:
        this.goToRoute(TyneRoutes.TableReservation);
        break;
      case 4:
        this.goToRoute(TyneRoutes.BusinessProfile);
        break;
      case 5:
        this.goToRoute(TyneRoutes.IncomeDetails);
        break;
      case 6:
        this.goToRoute(TyneRoutes.BusinessEditMenu);
        break;
      case 7:
        this.goToRoute(TyneRoutes.Opinions);
        break;
      case 8:
        this.goToRoute(TyneRoutes.BusinessCancelations);
        break;
      case 9:
        this.goToRoute(TyneRoutes.Home);
        this.clientService.logout();
        break;
      default:
        this.goToRoute(TyneRoutes.Home);
        break;
    }
  }

  private getUserData() {
    this.token = this.tokenService.getDecodedJwtToken();
    this.getMenuUser();
  }

  private getMenuUser() {
    if (this.token.rol === UserType.Customer) {
      this.menu = new Map<number, string>()
        .set(1, "Perfil")
        .set(2, "Locales Favoritos")
        .set(3, "Reservas Pendientes")
        .set(9, "Cerrar Sesión");
    } else {
      this.menu = new Map<number, string>()
        .set(4, "Perfil Local")
        .set(5, "Caja Virtual")
        .set(6, "Carta / Menú")
        .set(7, "Opiniones")
        .set(8, "Cancelaciones")
        .set(9, "Cerrar Sesión");
    }
  }

  private goToRoute(routename: string): void {
    if (this.router.url === `/${routename}`) {
      window.location.reload();
    }
    this.router.navigate([`${routename}`]);
  }
}
