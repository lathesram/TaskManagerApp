import {Component} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {SnackBarService} from "../../common/services/snack-bar.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService
  ]
})
export class SignInComponent {

  constructor(private authService: AuthService, private snackbarService: SnackBarService) {
  }

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  onSubmit() {
    if (this.registerForm.valid) {
      const email = this.registerForm.controls.email.value || '';
      const password = this.registerForm.controls.password.value || ''
      this.authService.signUpWithEmail(email, password).subscribe({
        next: (res) => {
          this.snackbarService.openSnackbar('User created');
        }, error: (err) => {
          this.snackbarService.openSnackbar(err.message);
        }
      })
    }
  }
}
