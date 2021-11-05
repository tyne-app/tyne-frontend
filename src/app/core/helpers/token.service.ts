import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Token} from "@shared/interfaces/token";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  public constructor(private router: Router) {}

  public getTokenFromLocalStorage(): string {
    return localStorage.getItem("access_token");
  }

  public getDecodedJwtToken(): Token {
    let decodedToken: Token = null;

    try {
      const token: string = this.getTokenFromLocalStorage();
      const JwtHelper = new JwtHelperService();
      decodedToken = JwtHelper.decodeToken<Token>(token);
    } catch (error) {
      sessionStorage.clear();
      localStorage.clear();
    }

    return decodedToken;
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
