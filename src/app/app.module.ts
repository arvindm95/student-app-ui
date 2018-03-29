import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { ProfileComponent } from './views/profile/profile.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { StudentsListComponent } from './views/students-list/students-list.component';
import { DashboardChartComponent } from './components/dashboard-chart/dashboard-chart.component';

import { NotificationsService } from 'angular2-notifications';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { HttpService } from './services/http/http.services';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'app', component: LayoutComponent, children:
      [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'students-list', component: StudentsListComponent },
      ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LayoutComponent,
    LoginComponent,
    DashboardComponent,
    StudentsListComponent,
    DashboardChartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ChartModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [RouterModule],
  providers: [
    HttpService,
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
