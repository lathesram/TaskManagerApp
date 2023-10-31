import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {SnackBarService} from "../../services/snack-bar.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private snackBar: SnackBarService
  ) {
  }

  // login
  // reset password
  // is logged in
  // Sign out


  signUpWithEmail(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        // Store the use info
        this.snackBar.openSnackbar('User Added');
      })
      .catch(err => {
        this.snackBar.openSnackbar(err.message)
      })
  }
}
