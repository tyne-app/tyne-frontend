import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TyneRoutes } from '../constants/url-routes';
/**
 * 
 */
import { TokenService } from '../helpers/token.service';

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
       
    const token: string = this.tokenService.getTokenFromLocalStorage();
    if(token){
      return true;      
    } 
    return this.router.navigateByUrl(TyneRoutes.Home); 
  }
  
}
