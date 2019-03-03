import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProfileComponent } from './views/profile/profile.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { StudentsListComponent } from './views/students-list/students-list.component';
import { InstitutionHomepage } from './views/institution-home-page/institution-home-page.component';
import { DashboardChartComponent } from './components/dashboard-chart/dashboard-chart.component';
import { ProgressBarCircleComponent } from './components/progress-bar-circle/progress-bar-circle.component';
import { NotificationsService } from 'angular2-notifications';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { HttpService } from './services/http/http.services';
import { FormsModule } from '@angular/forms';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieComponent } from './components/pie/pie.component';
import { AgmCoreModule } from '@agm/core';
import { NgxCarouselModule } from 'ngx-carousel';
import { TagsInputModule } from 'ngx-tags-input/dist';


const appRoutes: Routes = [
  { path: '', redirectTo: 'app/institution/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'app', component: LayoutComponent, children:
      [
        { path: '', redirectTo: 'institution/home', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'dashboard/:role/:id', component: DashboardComponent },
        //    { path: 'profile', component: ProfileComponent },
        { path: 'profile/:role/:id', component: ProfileComponent },
        { path: 'students-list', component: StudentsListComponent },
        { path: 'students-list/:role/:id', component: StudentsListComponent },
        { path: 'students-list/:edu/:ent/:res/:infra', component: StudentsListComponent },
        { path: 'profile/:role/:id/:teacherId', component: ProfileComponent },
        { path: 'institution/home', component: InstitutionHomepage }
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
    DashboardChartComponent,
    ProgressBarCircleComponent,
    BarChartComponent,
    PieComponent,
    InstitutionHomepage
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ChartModule,
    BrowserAnimationsModule,
    CommonModule,
    NgxCarouselModule,
    TagsInputModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: '  AIzaSyCMTH2klaSDgxN83v_ZPDHUn3l34i7h3I8  '
    }),
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
