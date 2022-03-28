import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from "@app/auth/shared/helpers/token.service";
import {Token} from "@app/auth/shared/interfaces/token";
import {UserType} from "@app/shared/inmutable/enums/user-type.enum";

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  public constructor(
    private tokenService:TokenService
  ) {}
  
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token:Token = this.tokenService.getDecodedJwtToken();
      if(token){
        return token.rol == UserType.Customer;
      }else{
        return false;
      }
  }

}
