
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class JwtDecodeService {
  
  constructor() {}
  

  public getToken():  Token {
    const token: string = localStorage.getItem('access_token');
    const JwtHelper = new JwtHelperService();
    const decodedToken:Token = JwtHelper.decodeToken<Token>(token);
    return decodedToken; 
  }
  
}
