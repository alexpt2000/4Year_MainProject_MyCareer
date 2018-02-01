import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { NotAuthenticatedError } from './../security/mycareer-http';
import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErrorHandlerService {

  constructor(
    private toasty: ToastyService,
    private router: Router
  ) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    } else if (errorResponse instanceof NotAuthenticatedError) {
      msg = 'Your session has expired!';
      this.router.navigate(['/login']);

    } else if (errorResponse instanceof Response
        && errorResponse.status >= 400 && errorResponse.status <= 499) {
      let errors;
      msg = 'There was an error processing your request.';

      if (errorResponse.status === 403) {
        msg = 'You do not have permission to perform this action.';
      }

      try {
        errors = errorResponse.json();

        msg = errors[0].mensagemUsuario;
      } catch (e) { }

      console.error('An error has occurred', errorResponse);

    } else {
      msg = 'Error processing remote service. Try again.';
      console.error('An error has occurred ', errorResponse);
    }

    this.toasty.error(msg);
  }

}



