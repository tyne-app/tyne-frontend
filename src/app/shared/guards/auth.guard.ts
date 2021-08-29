import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
/**
 * CONSTANTS
 */
import { TyneRoutes } from "../constants/url-routes";
/**
 * SERVICES
 */
import { TokenService } from "../helpers/token.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  public constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isToken: boolean = this.tokenService.isTokenSavedInLocalStorage();
    if (!isToken) {
      return this.router.navigateByUrl(TyneRoutes.Home);
    }
    const isTokenExpired: boolean = this.tokenService.isTokenExpired();
    if (isTokenExpired) {
      return this.router.navigateByUrl(TyneRoutes.Home);
    }
    return true;
  }
}
