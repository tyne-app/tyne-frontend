import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenService } from "@app/auth/shared/helpers/token.service";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";
import { SpinnerService } from "@app/shared/components/spinner/shared/services/spinner.service";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";
import { Observable, throwError } from "rxjs";
import { catchError, finalize, map } from "rxjs/operators";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: "root",
})
export class InterceptorService implements HttpInterceptor {
  private TOKEN_HEADER_KEY = "Authorization";

  public constructor(
    private tokenService: TokenService,
    private spinnerService: SpinnerService,
    private userService: UserService,
    private dialogService: DialogService
  ) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.callSpinner();
    let authReq = req;

    const isTokenValid: boolean = this.tokenService.isTokenValid();

    if (isTokenValid) {
      const isTokenExpired = this.tokenService.isTokenExpired();

      if (isTokenExpired) {
        this.dialogService.closePreviousDialogs();
        this.spinnerService.stopSpinner();
        this.userService.logout();
        this.dialogService.openDialogReloadCurrentPage({
          isSuccessful: true,
          messageButton: "Aceptar",
          subtitle: "Su sesión ha expirado, por favor vuelva a iniciar sesión",
          title: "Sesión expirada",
          redirectTo: TyneRoutes.Home,
        });

        return;
      }

      const token = this.tokenService.getTokenFromLocalStorage();

      authReq = req.clone({
        headers: req.headers.set(this.TOKEN_HEADER_KEY, token),
      });
    }

    return next.handle(authReq).pipe(
      catchError((err) => {
        return throwError(err);
      }),
      map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
        return evt;
      }),
      finalize(() => {
        this.spinnerService.stopSpinner();
      })
    );
  }
}
