import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize, map } from "rxjs/operators";
import { SpinnerService } from "@app/shared/components/spinner/shared/services/spinner.service";
import { TokenService } from "@app/auth/shared/helpers/token.service";

@Injectable({
  providedIn: "root",
})
export class InterceptorService implements HttpInterceptor {
  private TOKEN_HEADER_KEY = "Authorization";

  public constructor(private tokenService: TokenService, private spinnerService: SpinnerService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.callSpinner();
    let authReq = req;

    const isTokenValid: boolean = this.tokenService.isTokenValid();

    if (isTokenValid) {
      const token = this.tokenService.getTokenFromLocalStorage();

      authReq = req.clone({
        headers: req.headers.set(this.TOKEN_HEADER_KEY, token),
      });
    }


    return next
      .handle(authReq)
      .pipe(
        catchError((err) => {
          return throwError(err);
        }),
        map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
          return evt;
        }),
        finalize(()=>{
          this.spinnerService.stopSpinner();
        }),
      );
  }
}
