import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'firebase';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  user: User;
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
    // oldPsw: new FormControl(''),
    newPsw: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    repPsw: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  constructor(
    private authService: AuthService
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

  changePsw() {
    if (this.changePasswordForm.get('newPsw').value === this.changePasswordForm.get('repPsw').value) {
      this.user.updatePassword(this.changePasswordForm.get('newPsw').value).then(() => {
        console.log('success');
      }).catch(error => {
        console.log(error);
      });
    } else {
      console.log('error');
    }
  }
}
