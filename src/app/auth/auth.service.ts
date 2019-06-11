import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';

@Injectable()
export class AuthService {

  user: User;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    angularFireAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  login(login: string, password: string) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(login, password).then(value => {
      console.log(value);
      this.router.navigate(['']);
    }).catch(error => {
      console.log(error);
    })
  }

  logout() {
    this.angularFireAuth.auth.signOut().then(value => {
      this.router.navigate(['/login']);
    });
  }
}
