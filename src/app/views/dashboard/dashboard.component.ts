import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  role:any;
  instituteId:any;
  constructor(private _notificationsService: NotificationsService, private route: ActivatedRoute) { }

  ngOnInit() {
   // this._notificationsService.success('Success', 'Added successfully');
    this.route.params.subscribe((params) => {
      this.role = params['role'];
      this.instituteId = params['id'];
    });
  }

}
