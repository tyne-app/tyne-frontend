import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Token } from "../interfaces/token";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  public constructor() {}

  public getTokenFromLocalStorage(): string {
    const token: string = localStorage.getItem("access_token");
    return token;
  }

  public getDecodedJwtToken(): Token {
    const token: string = this.getTokenFromLocalStorage();
    const JwtHelper = new JwtHelperService();
    const decodedToken: Token = JwtHelper.decodeToken<Token>(token);
    return decodedToken;
  }

  public isTokenExpired(): boolean {
    const token: string = this.getTokenFromLocalStorage();
    const JwtHelper = new JwtHelperService();
    const isTokenExpired: boolean = JwtHelper.isTokenExpired(token);
    return isTokenExpired;
  }

  public isTokenSavedInLocalStorage(): boolean {
    const token: string = this.getTokenFromLocalStorage();
    return token ? true : false;
  }
}
