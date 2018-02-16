import { Component, OnInit, NgModule, ViewChild } from '@angular/core';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';

import { BrowserModule } from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Form, EmailValidator } from '@angular/forms';
import { AuthService } from 'app/security/auth.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { SchedulesService, SchedulesFilter } from 'app/schedules/schedules.service';





@Component({
  selector: 'app-schedules-search',
  templateUrl: './schedules-search.component.html',
  styleUrls: ['./schedules-search.component.css']
})


export class SchedulesSearchComponent implements OnInit {


  totalRecords = 0;
  filter = new SchedulesFilter();
  schedulesweb = [];

  display;
  email = '';
  @ViewChild('table') grid;

  constructor(
    private _location: Location,
    private schedulesService: SchedulesService,
    private toasty: ToastyService,
    private auth: AuthService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
  ) { }


  ngOnInit() {
    this.search();
  }

  search() {
    this.schedulesService.search()
      .then(result => {
        this.schedulesweb = result;
      });
  }


  confirmationDelete(schedule: any) {
    this.confirmation.confirm({
      message: 'Are you sure you want to delete?',
      accept: () => {
        this.delete(schedule);
      }
    });
  }

  delete(schedule: any) {
    this.schedulesService.delete(schedule.code)
      .then(() => {
        if (this.grid.first === 0) {
          this.search();
        } else {
          this.grid.first = 0;
        }

        this.toasty.success('Deleted successfully!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  backClicked() {
    this._location.back();
  }


}
