import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadModule } from './upload/upload.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { MediaComponent } from './pages/media/media.component';
import { MediaService } from './services/media.service';

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
    UserSettingsComponent,
    HomeComponent,
    PagesComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AuthModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UploadModule
  ],
  providers: [
    MediaService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
