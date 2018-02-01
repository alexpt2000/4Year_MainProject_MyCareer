import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  scheduleHeader: any;
  events: any[];

  constructor() { }

  ngOnInit() {
    this.scheduleHeader = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };


    this.events = [
      {
        'id': 1,
        'title': 'Alex',
        'start': '2018-02-05'
      },
      {
        'id': 2,
        'title': 'Project',
        'start': '2018-02-15'
      }

    ]

  }

}
