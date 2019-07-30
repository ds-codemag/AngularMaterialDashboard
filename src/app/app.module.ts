// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material.module';
import { DashboardModule } from './modules/dashboard-module/dashboard.module';
import { UserModule } from './modules/user-module/user.module';
import { HomeModule } from './modules/home-module/home.module';
import { PagesModule } from './modules/pages-module/pages.module';
import { MediaModule } from './modules/media-module/media.module';

// Components
import { AppComponent } from './app.component';

// Firebase configuration
const firebase = {
  apiKey: 'AIzaSyBRtkBMYlyMW7zGiHa2l-oC7sNdil2gsTw',
  authDomain: 'ng-material-dashboard.firebaseapp.com',
  databaseURL: 'https://ng-material-dashboard.firebaseio.com',
  projectId: 'ng-material-dashboard',
  storageBucket: 'ng-material-dashboard.appspot.com',
  messagingSenderId: '1091096725862'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebase),
    AuthModule,
    AppRoutingModule,
    DashboardModule,
    UserModule,
    HomeModule,
    PagesModule,
    MediaModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
