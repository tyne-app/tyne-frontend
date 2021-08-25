import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
/**
 * SERVICES
 */
import { TokenService } from '../helpers/token.service';
/**
 * CONSTANTS
 */
import { TyneRoutes } from '../constants/url-routes';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public constructor(
    private tokenService:TokenService,
    private router:Router
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       
    const isToken:boolean = this.tokenService.isTokenSavedInLocalStorage();
    if(isToken){
      return this.router.navigateByUrl(TyneRoutes.Home); 
    }
    const isTokenExpired:boolean = this.tokenService.isTokenExpired();
    if(isTokenExpired){
      return this.router.navigateByUrl(TyneRoutes.Home); 
    } 
    return true;
  }
  
}
