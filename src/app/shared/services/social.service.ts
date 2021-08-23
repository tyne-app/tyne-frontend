/**
 * ANGULAR CORE
 */
import { Injectable } from '@angular/core';
/**
 * FIREBASE
 */
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase/app';
/**
 * RXJS
 */
 import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

 


  public constructor(
    public afAuth: AngularFireAuth 
  ) {}
  
  public async GoogleAuth(): Promise<firebase.auth.UserCredential> {
    return await this.GoogleLogin(new firebase.auth.GoogleAuthProvider());
  }  
  private async GoogleLogin(provider): Promise<firebase.auth.UserCredential> {
    const authCredential = await this.afAuth.signInWithPopup(provider);
    return authCredential;
  }
 
  public FacebookAuth(): void{}

  public facebookLogin(): void{}



}
