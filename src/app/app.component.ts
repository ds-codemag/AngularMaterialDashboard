import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  darkTheme = false ;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof ActivationEnd) {
          this.title = event.snapshot.data['title'];
        }
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
}
