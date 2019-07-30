import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title: string;
  darkTheme = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.title = this.route.snapshot.firstChild.data.title;
    });

    if (localStorage.getItem('appTheme') && localStorage.getItem('appTheme') === 'dark') {
      document.body.classList.add('dark-theme');
      this.darkTheme = true;
    }
  }

  ngOnInit() {}

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
