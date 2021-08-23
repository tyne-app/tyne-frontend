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
 * REACTIVE
 */
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  public constructor(
    public afAuth: AngularFireAuth 
  ) {}

  public GoogleLogin(): Observable<firebase.auth.UserCredential> {
    return from(this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
  }

  public FacebookLogin(): Observable<firebase.auth.UserCredential>{
    return from(this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider()));
  }


   
}
