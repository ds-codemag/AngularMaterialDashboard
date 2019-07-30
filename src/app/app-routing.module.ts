import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/services/auth-guard/auth-guard.service';
import { LoginComponent } from './auth/components/login.component';
import { DashboardComponent } from './modules/dashboard-module/components/dashboard/dashboard.component';
import { UserSettingsComponent } from './modules/user-module/components/user-settings/user-settings.component';
import { HomeComponent } from './modules/home-module/components/home/home.component';
import { PagesComponent } from './modules/pages-module/components/pages/pages.component';
import { MediaComponent } from './modules/media-module/components/media/media.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'user-settings',
        component: UserSettingsComponent,
        data: {
          title: 'Ustawienia użytkownika'
        }
      },
      {
        path: 'pages',
        component: PagesComponent,
        data: {
          title: 'Strony'
        }
      },
      {
        path: 'media/:type',
        component: MediaComponent,
        data: {
          title: 'Media'
        }
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
