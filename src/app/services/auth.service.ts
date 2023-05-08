import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, passwort: string) {
    return this.http
      .post<any>('http://localhost:3001/api/login', { username, passwort })
      
  }

  // private setSession(authResult: any) {
  //   const expiresAt = moment().add(authResult.expiresIn, 'second');
  //   localStorage.setItem('id_token', authResult.idToken);
  //   localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  // }

  // logout() {
  //   if (this.get_cookie('token')) {
  //     document.cookie =
  //       'token' +
  //       '=' +
  //       ('/' ? ';path=' + '/' : '') +
  //       ('localhost' ? ';domain=' + 'localhost' : '') +
  //       ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
  //   }
  // }

  // get_cookie(cookie: any) {
  //   return document.cookie.split(';').some((c) => {
  //     return c.trim().startsWith(cookie + '=');
  //   });
  // }

  // public isLoggedIn() {
  //   return moment().isBefore(this.getExpiration());
  // }

  // isLoggedOut() {
  //   return !this.isLoggedIn();
  // }

  // getExpiration() {
  //   const expiration = localStorage.getItem('expires_at');
  //   const expiresAt = JSON.parse(expiration!);
  //   return moment(expiresAt);
  // }
}
