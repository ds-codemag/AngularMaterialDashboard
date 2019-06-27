import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages/pages.component';
import { LoginComponent } from './auth/login.component';
import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
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
