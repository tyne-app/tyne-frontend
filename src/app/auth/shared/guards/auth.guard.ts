import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { TokenService } from "@app/auth/shared/helpers/token.service";
import { UserService } from "@app/core/services/user.service";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  public constructor(
    private tokenService: TokenService,
    private router: Router,
    private userService: UserService,
    private dialogService: DialogService
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isTokenValid: boolean = this.tokenService.isTokenValid();

    // if (!isTokenValid) {
    //   return this.router.navigateByUrl(TyneRoutes.Home);
    // }

    // const isTokenExpired: boolean = this.tokenService.isTokenExpired();

    // if (isTokenExpired) {
    //   this.userService.logout();
    //   this.dialogService.openDialogReloadCurrentPage({
    //     isSuccessful: true,
    //     messageButton: "Aceptar",
    //     subtitle: "Su sesión ha expirado, por favor vuelva a iniciar sesión",
    //     title: "Sesión expirada",
    //     redirectTo: TyneRoutes.Home,
    //   });

    //   return;
    // }

    return true;
  }
}
