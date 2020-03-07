import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
export class AuthService {

  authState: Observable<User | null> = this.fireAuth.authState;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  login(login: string, password: string) {
    this.fireAuth.auth.signInWithEmailAndPassword(login, password).then(() => {
      this.router.navigate(['']);
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

  logout() {
    this.fireAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
