import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http/http.services';
import { NotificationsService } from 'angular2-notifications';

import {
  CardAnimation1, CardAnimation2, CardAnimation3,
  CardAnimation4, CardAnimation5, CardAnimation6,
  FadeIn, FadeIn1, FadeIn2,
  LoopAnimation, SlideInFromRight, SizeChange
} from '../../animation.constants';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [CardAnimation1, CardAnimation2, CardAnimation3, CardAnimation4, CardAnimation5, CardAnimation6, FadeIn, FadeIn1, FadeIn2,
    LoopAnimation, SlideInFromRight, SizeChange]
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  constructor(private router: Router, private service: HttpService, private _notificationsService: NotificationsService) { }

  ngOnInit() {

  }

  login() {
    let toSend = {};
    toSend['email'] = this.username;
    toSend['password'] = this.password;
    // this.service.post('/user/login', JSON.stringify(toSend)).then((data)=>{
    let data = {
      'role_name': 'student',
      'user_id': 'username'
    }

    if ((this.username == "admin@aicte.com" || this.username == "superadmin@aicte.com") && this.password == "asdf1234") {
      localStorage.setItem("isAdmin", "true");
      this.router.navigateByUrl("app/institution/home");
    }else{
      this._notificationsService.error("Error", "Invalid user credentials!!")
    }


  }
  loginTo(role, id) {
    if (role == 'student') {
      this.router.navigate(['app/profile', role, id]);
    } else if (role == 'teacher') {
      this.router.navigate(['app/students-list', role, id]);
    } else if (role == 'institute') {
      this.router.navigate(['app/dashboard', role, id]);
    }

  }

}
