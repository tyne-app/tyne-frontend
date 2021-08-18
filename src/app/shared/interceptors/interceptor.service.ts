import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../helpers/token.service';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  private TOKEN_HEADER_KEY:string = 'Authorization';

  constructor( 
    private tokenService: TokenService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    let authReq = req; 
    const token = this.tokenService.getTokenFromLocalStorage();
    if(token!=null){
      authReq = req.clone({headers: req.headers.set(this.TOKEN_HEADER_KEY, token)});
    } 
    return next.handle(req);
  }

}

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true
  }
]
