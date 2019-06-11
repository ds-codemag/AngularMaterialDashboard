import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages/pages.component';
import { HomeComponent } from './pages/home/home.component';

const firebase = {
  apiKey: 'AIzaSyBRtkBMYlyMW7zGiHa2l-oC7sNdil2gsTw',
  authDomain: 'ng-material-dashboard.firebaseapp.com',
  databaseURL: 'https://ng-material-dashboard.firebaseio.com',
  projectId: 'ng-material-dashboard',
  storageBucket: 'ng-material-dashboard.appspot.com',
  messagingSenderId: '1091096725862'
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AuthModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
