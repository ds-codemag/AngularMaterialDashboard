import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'firebase';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

export interface UserInterface {
  name: string;
  email: string;
  photoUrl: string;
  emailVerified: boolean;
  changePsw(): void;
  changeUserData(): void;
}

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})

export class UserSettingsComponent implements OnInit, UserInterface {

  user: User;

  name: string;
  email: string;
  photoUrl: string;
  emailVerified: boolean;

  userSettingsForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    avatar: new FormControl('')
  });

  changePasswordForm = new FormGroup({
    newPsw: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    repPsw: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      this.equalPswValidator
    ])
  });

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      if (user != null) {

        this.user = user;
        this.name = user.displayName;
        this.email = user.email;
        this.photoUrl = user.photoURL;
        this.emailVerified = user.emailVerified;

        this.userSettingsForm.patchValue({
          name: user.displayName,
          email: user.email
        });
      }
    });
  }

  equalPswValidator(field: FormControl) {
    if (field.parent) {
      const pass = field.parent.get('newPsw').value;
      const confirmPass = field.parent.get('repPsw').value;
      return pass === confirmPass ? null : { notSame: true };
    }
  }

  changeUserData() {
    if (this.userSettingsForm.valid) {
      this.user.updateProfile({
        displayName: this.userSettingsForm.get('name').value
      }).then(() => {
        this.user.updateEmail(this.userSettingsForm.get('email').value);
      }).then(() => {
        this.snackBar.open(
          'Zmiany zostały wprowadzone',
          null,
          {
            duration: 5000,
            verticalPosition: 'top',
            panelClass: 'success-snackbar'
          }
        );
      }).catch(error => {
        this.snackBar.open(
          error.message,
          null,
          {
            duration: 5000,
            verticalPosition: 'top',
            panelClass: 'success-snackbar'
          }
        );
      });

    } else {

      this.snackBar.open(
        'Wypełnij poprawnie formularz',
        null,
        {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: 'error-snackbar'
        }
      );
    }
  }

  changePsw() {
    if (this.changePasswordForm.valid) {
      this.user.updatePassword(this.changePasswordForm.get('newPsw').value).then(() => {
        this.snackBar.open(
          'Hasło zostało zmienione',
          null,
          {
            duration: 5000,
            verticalPosition: 'top',
            panelClass: 'success-snackbar'
          }
        );
      }).catch(error => {
        this.snackBar.open(
          error.message,
          null,
          {
            duration: 5000,
            verticalPosition: 'top',
            panelClass: 'error-snackbar'
          }
        );
      });
    } else {
      this.snackBar.open(
        'Wypełnij poprawnie formularz',
        null,
        {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: 'error-snackbar'
        }
      );
    }
  }

  verifyEmail() {
    this.user.sendEmailVerification().then(() => {
      this.snackBar.open(
        'Emial weryfikacyjny został wysłany.',
        null,
        {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: 'success-snackbar'
        }
      );
    }).catch(error => {
      this.snackBar.open(
        error.message,
        null,
        {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: 'error-snackbar'
        }
      );
    });
  }
}
