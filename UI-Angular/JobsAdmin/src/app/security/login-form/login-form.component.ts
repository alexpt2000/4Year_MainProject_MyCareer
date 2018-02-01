import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  login(user: string, password: string) {
    this.auth.login(user, password)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(erro => {
        this.errorHandler.handle(erro);
      });
  }

  // To be remove - used just to pass the user and password
  loginPass() {
    this.auth.login('admin@mycareer.com', 'admin')
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(erro => {
        this.errorHandler.handle(erro);
      });
  }

    // To be remove - used just to pass the user and password
    loginPassAlex() {
      this.auth.login('alex@mycareer.com', 'alex')
        .then(() => {
          this.router.navigate(['/dashboard']);
        })
        .catch(erro => {
          this.errorHandler.handle(erro);
        });
    }

}
