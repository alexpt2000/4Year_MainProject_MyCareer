import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from './../core/error-handler.service';
import { ConfirmationService } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/dashboard/dashboard.service';
import { AuthService } from 'app/security/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  scheduleHeader: any;
  events: any[];
  total_jobs = '';
  total_applicants = '';
  total_newapplicants = '';

  constructor(
    private dashboardService: DashboardService,
    private toasty: ToastyService,
    private auth: AuthService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private router: ActivatedRoute,

  ) { }

  ngOnInit() {

    this.findTotalJobs();
    this.findTotalApplicants();
    this.findTotalNewApplicants();

    this.scheduleHeader = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    }

    this.events = [
      {
        'id': 1,
        'title': 'Alex',
        'start': '2018-02-07 10:10',
        'end': '2018-02-07 11:40'
      },
      {
        'id': 2,
        'title': 'Project',
        'start': '2018-02-15'
      }

    ]

  }

  findTotalJobs() {
    this.dashboardService.totalJobs()
      .then(result => {
        this.total_jobs = result;
      });
  }

  findTotalApplicants() {
    this.dashboardService.totalApplicants()
      .then(result => {
        this.total_applicants = result;
      });
  }

  findTotalNewApplicants() {
    this.dashboardService.totalNewApplicants()
      .then(result => {
        this.total_newapplicants = result;
      });
  }

}
