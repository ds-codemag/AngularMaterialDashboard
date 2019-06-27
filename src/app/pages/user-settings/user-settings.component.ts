import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  name: string;
  email: string;
  photoUrl: string;
  uid: string;
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
    oldPsw: new FormControl(''),
    newPsw: new FormControl(''),
    repPesw: new FormControl('')
  });

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      if (user != null) {

        this.userSettingsForm.patchValue({
          name: user.displayName,
          email: user.email
        });

        console.log(user.displayName);
        console.log(user.email);
        console.log(user.photoURL);
        console.log(user.emailVerified);

        this.name = user.displayName;
        this.email = user.email;
        this.photoUrl = user.photoURL;
        this.emailVerified = user.emailVerified;
      }
    });
  }
}
