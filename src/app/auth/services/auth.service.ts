import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {from, Observable} from "rxjs";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth) {
  }

  // login
  // reset password
  // is logged in
  // Sign out


  signUpWithEmail(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(this.angularFireAuth.createUserWithEmailAndPassword(email, password))
  }
}
