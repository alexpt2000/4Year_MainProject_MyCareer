import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ToastyConfig } from 'ng2-toasty';

// typedoc --out .\documentation\ --module core.module

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private toastyConfig: ToastyConfig,
    private router: Router
  ) {
    this.toastyConfig.theme = 'bootstrap';
  }

  showNavbar() {
    return this.router.url !== '/login';
  }

}
