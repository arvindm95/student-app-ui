import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isAdmin: any;
  constructor(private router: Router) {
    this.isAdmin = localStorage.getItem("isAdmin");
  }

  ngOnInit() {
  }

  navigateToHome() {
    this.router.navigateByUrl('/app/institution/home');
  }

  logout(){
    localStorage.removeItem("isAdmin");
    this.isAdmin = false;
  }

  redirectToLogin(){
    this.router.navigateByUrl('/login');
  }
}
