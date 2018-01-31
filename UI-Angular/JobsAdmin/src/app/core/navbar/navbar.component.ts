import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LogoutService } from './../../seguranca/logout.service';
import { ErrorHandlerService } from './../error-handler.service';
import { AuthService } from './../../seguranca/auth.service';
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
        label: 'File',
        items: [{
          label: 'New',
          icon: 'fa-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Applicant',
        icon: 'fa-edit',
        items: [
          { label: 'List applicant', icon: 'fa-mail-forward', routerLink: ['/lancamentos'] },
          { label: 'Evaluate', icon: 'fa-mail-reply', routerLink: ['/pessoas'] }
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
