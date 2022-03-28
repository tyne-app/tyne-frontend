import { Injectable } from "@angular/core";
import {
  Auth,
  signInWithPopup,
  FacebookAuthProvider
} from '@angular/fire/auth';
import { ClientService } from "@app/client/shared/services/client.service";
import { UserService } from "@app/core/services/user.service";
import { from, Observable } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { MapperService } from "../helpers/mapper.service";
import { LoginResponse } from "../interfaces/token";

@Injectable({
  providedIn: "root",
})
export class FacebookService {

  public constructor(
    private auth: Auth,
    private userService:UserService,
    private clientService:ClientService,
    private mapperService:MapperService
    ) {}

  public facebookSignIn(): Observable<LoginResponse> {
    return this.facebookSignInWithPopup().pipe(
      mergeMap( userCredential => {
        return this.socialLogin(userCredential);
      })
    );
  }
  
  public facebookSignUp(): Observable<any>{ 
    return this.facebookSignInWithPopup().pipe(
      mergeMap( userCredential => {
        return this.socialRegister(userCredential);
      })
    );
  }

  public facebookSignInWithPopup(): Observable<any> {
    return from(signInWithPopup(this.auth, new FacebookAuthProvider()));
  }
  
  private socialLogin(userCredential: any): Observable<LoginResponse>{
    return this.userService.socialLogin(userCredential._tokenResponse.email, userCredential.user.accessToken);    
  }

  private socialRegister(userCredential: any): Observable<any>{
    return this.clientService.registerWithSocialNetworks(
      this.mapperService.mapUserFacebookClient(userCredential._tokenResponse,userCredential.user.accessToken));
  }
  
}
