import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { TokenService } from "@app/auth/shared/helpers/token.service";
import { Token } from "@app/auth/shared/interfaces/token";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";
import { UserType } from "@app/shared/inmutable/enums/user-type.enum";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HomeGuard implements CanActivate {
  public constructor(private tokenService: TokenService, private router: Router) {}
  public canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token: Token = this.tokenService.getDecodedJwtToken();
    if (token !== null) {
      if (token.rol == UserType.Manager) {
        this.router.navigate([TyneRoutes.BusinessHome]);
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
}
