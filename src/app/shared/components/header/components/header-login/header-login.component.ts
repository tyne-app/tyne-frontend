import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TyneRoutes } from "src/app/shared/constants/url-routes";
import { TokenService } from "src/app/shared/helpers/token.service";
import { Claims } from "src/app/shared/interfaces/token";
import { ClientService } from "src/app/shared/services/client.service";

@Component({
  selector: "app-header-login",
  templateUrl: "./header-login.component.html",
  styleUrls: ["./header-login.component.scss"],
})
export class HeaderLoginComponent implements OnInit {
  public menu: Map<number, string>;
  public claims: Claims;

  public constructor(
    private router: Router,
    private clientService: ClientService,
    private tokenService: TokenService
  ) {}

  public ngOnInit(): void {
    this.getMenuClients();
    this.getUserData();
  }

  public asIsOrder(a, b): number {
    return 1;
  }

  public OnNavigate(option: number): void {
    switch (option) {
      case 1:
        this.goToPerfil();
        break;
      case 2:
        this.goToFavouriteLocal();
        break;
      case 3:
        this.goToTableReservation();
        break;
      case 4:
        this.closeSession();
        break;
      default:
        this.goToInit();
        break;
    }
  }

  private getUserData() {
    const token = this.tokenService.getDecodedJwtToken();
    this.claims = token.claims;
  }

  private getMenuClients() {
    this.menu = new Map<number, string>()
      .set(1, "Perfil")
      .set(2, "Locales Favoritos")
      .set(3, "Reservas Pendientes")
      .set(4, "Cerrar sesión");
  }

  private closeSession(): void {
    this.goToRoute(TyneRoutes.Home);
    this.clientService.logout();
  }

  private goToFavouriteLocal(): void {
    this.goToRoute(TyneRoutes.FavouriteLocal);
  }

  private goToInit() {
    this.goToRoute(TyneRoutes.Home);
  }

  private goToTableReservation(): void {
    this.goToRoute(TyneRoutes.TableReservation);
  }

  private goToPerfil(): void {
    this.goToRoute(TyneRoutes.ClientProfile);
  }

  private goToRoute(routename: string): void {
    // if (this.router.url === routename) {
    //   //
    // }
    // console.log(this.router.url);
    this.router.navigate([`${routename}`]);
  }
}
