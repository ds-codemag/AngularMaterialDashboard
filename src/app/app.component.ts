import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof ActivationEnd) {
          this.title = event.snapshot.data['title'];
        }
      });
  }
}
