import { Injectable } from "@angular/core";
import { Auth, GoogleAuthProvider, signInWithPopup, UserCredential } from "@angular/fire/auth";
import { ClientService } from "@app/client/shared/services/client.service";
import { UserService } from "@app/core/services/user.service";
import { from, Observable } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { MapperService } from "../helpers/mapper.service";
import { LoginResponse } from "../interfaces/token";

@Injectable({
  providedIn: "root",
})
export class GoogleService {
  public constructor(
    private auth: Auth,
    private userService: UserService,
    private clientService: ClientService,
    private mapperService: MapperService
  ) {}

  public googleSignIn(): Observable<LoginResponse> {
    return this.googleSignInWithPopup().pipe(
      mergeMap((userCredential) => {
        return this.socialLogin(userCredential.user);
      })
    );
  }

  public googleSignUp(): Observable<unknown> {
    return this.googleSignInWithPopup().pipe(
      mergeMap((userCredential) => {
        return this.socialRegister(userCredential.user);
      })
    );
  }

  private googleSignInWithPopup(): Observable<UserCredential> {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider()));
  }

  private socialLogin(user: UserCredential["user"]): Observable<LoginResponse> {
    return from(user.getIdToken()).pipe(
      mergeMap((token) => {
        console.log(token);
        return this.userService.socialLogin(user.email, token);
      })
    );
  }

  private socialRegister(user: UserCredential["user"]): Observable<unknown> {
    return from(user.getIdToken()).pipe(
      mergeMap((token) => {
        return this.clientService.registerWithSocialNetworks(this.mapperService.mapUserGoogleClient(user, token));
      })
    );
  }
}
