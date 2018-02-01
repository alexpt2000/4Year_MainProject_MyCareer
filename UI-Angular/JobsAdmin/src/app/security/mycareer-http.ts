import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';

import { AuthConfig, AuthHttp, JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

export class NotAuthenticatedError {}

@Injectable()
export class MycareerHttp extends AuthHttp {

  constructor(
    private auth: AuthService,
    options: AuthConfig,
    http: Http, defOpts?: RequestOptions
  ) {
    super(options, http, defOpts);
  }

  public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.makeRequisition(() => super.delete(url, options));
  }

  public patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.makeRequisition(() => super.patch(url, options));
  }

  public head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.makeRequisition(() => super.head(url, options));
  }

  public options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.makeRequisition(() => super.options(url, options));
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.makeRequisition(() => super.get(url, options));
  }

  public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.makeRequisition(() => super.post(url, body, options));
  }

  public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.makeRequisition(() => super.put(url, body, options));
  }

  private makeRequisition(fn: Function): Observable<Response> {
    if (this.auth.isAccessTokenInvalid()) {
      console.log('HTTP request with invalid access token. Getting new token...');

      const callNewAccessToken = this.auth.getNewAccessToken()
        .then(() => {
          if (this.auth.isAccessTokenInvalid()) {
            throw new NotAuthenticatedError();
          }

          return fn().toPromise();
        });

      return Observable.fromPromise(callNewAccessToken);
    } else {
      return fn();
    }
  }

}
