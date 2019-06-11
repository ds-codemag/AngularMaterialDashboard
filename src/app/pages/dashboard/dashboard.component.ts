import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title: string;
  darkTheme = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(() => {
      this.title = this.activatedRoute.snapshot.firstChild.data.title;
    });

    if (localStorage.getItem('appTheme') && localStorage.getItem('appTheme') === 'dark') {
      document.body.classList.add('dark-theme');
      this.darkTheme = true;
    }
  }

  switchTheme() {
    if (this.darkTheme) {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('appTheme', 'light');
    } else {
      document.body.classList.add('dark-theme');
      localStorage.setItem('appTheme', 'dark');
    }

    this.darkTheme = !this.darkTheme;
  }

  logout() {
    this.authService.logout();
  }
}
