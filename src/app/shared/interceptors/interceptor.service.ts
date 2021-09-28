import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { SpinnerService } from "../helpers/spinner-service";
import { TokenService } from "../helpers/token.service";

@Injectable({
  providedIn: "root",
})
export class InterceptorService implements HttpInterceptor {
  private TOKEN_HEADER_KEY = "Authorization";

  public constructor(
    private tokenService: TokenService,
    private spinnerService: SpinnerService
  ) {}

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

    this.spinnerService.setLoading(true);

    return next
      .handle(authReq)
      .pipe(
        catchError((err) => {
          this.spinnerService.setLoading(false);
          return err;
        })
      )
      .pipe(
        map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
          if (evt instanceof HttpResponse) {
            this.spinnerService.setLoading(false);
          }
          return evt;
        })
      );
  }
}
