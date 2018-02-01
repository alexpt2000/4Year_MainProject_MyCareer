import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LogoutService } from './../../security/logout.service';
import { ErrorHandlerService } from './../error-handler.service';
import { AuthService } from './../../security/auth.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import {MenubarModule} from 'primeng/components/menubar/menubar';

import {MenuModule} from 'primeng/components/menu/menu';





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {

  exibindoMenu = false;
  items: MenuItem[];

  constructor(
    public auth: AuthService,
    private logoutService: LogoutService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home', icon: 'fa-home', routerLink: ['/dashboard']
      },
      {
        label: 'Applicant',
        icon: 'fa-users',
        items: [
          { label: 'List applicant', icon: 'fa-users', routerLink: ['/'] },
          { label: 'Evaluate applicant', icon: 'fa-address-card', routerLink: ['/'] }
        ]
      },
      {
        label: 'Jobs',
        icon: 'fa-briefcase',
        items: [
          { label: 'List jobs', icon: 'fa-briefcase', routerLink: ['/'] },
          { label: 'New job ', icon: 'fa-plus-circle', routerLink: ['/'] }
        ]
      },
      {
        label: 'Test',
        icon: 'fa-edit',
        items: [
          { label: 'Lancamentos', icon: 'fa-mail-forward', routerLink: ['/lancamentos'] },
          { label: 'Pessoas', icon: 'fa-mail-reply', routerLink: ['/pessoas'] }
        ]
      }
    ];
  }


  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
