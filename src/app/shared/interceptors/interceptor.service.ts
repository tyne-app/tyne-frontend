import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../helpers/token.service";

@Injectable({
  providedIn: "root",
})
export class InterceptorService implements HttpInterceptor {
  private TOKEN_HEADER_KEY = "Authorization";

  public constructor(private tokenService: TokenService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;

    const isTokenValid: boolean = this.tokenService.isTokenValid();

    if (isTokenValid) {
      const token = this.tokenService.getTokenFromLocalStorage();

      authReq = req.clone({
        headers: req.headers.set(this.TOKEN_HEADER_KEY, token),
      });
    }
    return next.handle(authReq);
  }
}
