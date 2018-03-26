import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ProfileComponent } from './views/profile/profile.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { StudentsListComponent } from './views/students-list/students-list.component';

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
    StudentsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {useHash:true})
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
