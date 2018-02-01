import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  scheduleHeader: any;

  constructor() { }

  ngOnInit() {
    this.scheduleHeader = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
  };
  }

}
