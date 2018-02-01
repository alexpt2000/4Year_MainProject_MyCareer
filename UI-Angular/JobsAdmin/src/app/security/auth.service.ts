import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {

  oauthTokenUrl: string;
  jwtPayload: any;

  constructor(
    private http: Http,
    private jwtHelper: JwtHelper
  ) {
    this.oauthTokenUrl = `${environment.apiUrl}/oauth/token`;
    this.loadToken();
  }

  login(user: string, password: string): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = `username=${user}&password=${password}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body,
        { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.saveToken(response.json().access_token);
      })
      .catch(response => {
        if (response.status === 400) {
          const responseJson = response.json();

          if (responseJson.error === 'invalid_grant') {
            return Promise.reject('Invalid user or password!');
          }
        }

        return Promise.reject(response);
      });
  }

  getNewAccessToken(): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = 'grant_type=refresh_token';

    return this.http.post(this.oauthTokenUrl, body,
        { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.saveToken(response.json().access_token);

        console.log('New access token created!');

        return Promise.resolve(null);
      })
      .catch(response => {
        console.error('Error renewing token.', response);
        return Promise.resolve(null);
      });
  }

  cleanAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  isAccessTokenInvalid() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  havePermission(permission: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permission);
  }

  haveAnyPermission(roles) {
    for (const role of roles) {
      if (this.havePermission(role)) {
        return true;
      }
    }

    return false;
  }

  private saveToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private loadToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.saveToken(token);
    }
  }

}
