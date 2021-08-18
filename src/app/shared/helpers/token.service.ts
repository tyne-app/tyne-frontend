
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
   
  constructor() {}
  

  public getDecodedJwtToken(): Token {
    const token: string = localStorage.getItem('access_token');
    const JwtHelper = new JwtHelperService();
    const decodedToken:Token = JwtHelper.decodeToken<Token>(token);
    return decodedToken; 
  }

  public getTokenFromLocalStorage(): string {
    const token: string = localStorage.getItem('access_token');
    return token;
  }
  
}
