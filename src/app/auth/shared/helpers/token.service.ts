import { Injectable } from "@angular/core";
import { Token } from "@app/auth/shared/interfaces/token";
import { LocalStorageService } from "@app/shared/helpers/local-storage.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  public constructor(private localStorageService: LocalStorageService) {}

  public getTokenFromLocalStorage(): string {
    return this.localStorageService.getValue("access_token");
  }

  public setTokenInLocalStorage(token: string): void {
    this.localStorageService.setValue("access_token", token);
  }

  public getDecodedJwtToken(): Token {
    let decodedToken: Token = null;
    const token: string = this.getTokenFromLocalStorage();
    if (token) {
      const JwtHelper = new JwtHelperService();
      decodedToken = JwtHelper.decodeToken<Token>(token);
      return decodedToken;
    } else {
      return null;
    }
  }

  public isTokenExpired(): boolean {
    const token: string = this.getTokenFromLocalStorage();
    const JwtHelper = new JwtHelperService();
    return JwtHelper.isTokenExpired(token);
  }

  public isTokenValid(): boolean {
    const token = this.getDecodedJwtToken();
    return !!token;
  }
}
