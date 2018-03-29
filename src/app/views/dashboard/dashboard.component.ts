import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _notificationsService: NotificationsService) { }

  ngOnInit() {
    this._notificationsService.success('Success', 'Added successfully');
  }

}
