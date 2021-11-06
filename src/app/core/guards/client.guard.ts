import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from "@core/helpers/token.service";
import {Token} from "@shared/interfaces/token";
import {UserType} from "@shared/inmutable/enums/user_type.enum";

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  public constructor(
    private tokenService:TokenService
  ) {
  }
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token: Token;
    token = this.tokenService.getDecodedJwtToken();
    console.log(token);
    return token.rol == UserType.Customer;
  }

}
