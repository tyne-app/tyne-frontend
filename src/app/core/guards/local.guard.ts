import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Token} from "@shared/interfaces/token";
import {UserType} from "@shared/inmutable/enums/user_type.enum";
import {TokenService} from "@core/helpers/token.service";

@Injectable({
  providedIn: 'root'
})
export class LocalGuard implements CanActivate {
  public constructor(
    private tokenService:TokenService
  ) {
  }
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token: Token;
    token = this.tokenService.getDecodedJwtToken();
    return token.rol == UserType.Manager;
  }

}
