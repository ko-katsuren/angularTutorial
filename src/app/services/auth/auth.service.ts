import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:8000/api/';

  constructor(private router: Router, private http: HttpClient) {}

  login(email: string, pass: string) {
    this.http
      .post(
        this.url + 'login',
        'body=' +
          JSON.stringify({
            email: email,
            password: pass,
          }),
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
        }
      )
      .subscribe(
        (res: any) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/select']);
        },
        (error) => {
          console.log('error: ' + JSON.stringify(error));
        }
      );
  }

  logout() {
    this.http
      .post(
        this.url + 'logout',
        'body=' +
          JSON.stringify({
            token: localStorage.getItem('token'),
          }),
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
        }
      )
      .subscribe(
        (res: any) => {
          localStorage.removeItem('token');
          this.router.navigate(['/']);
        },
        (error) => {
          console.log('error: ' + JSON.stringify(error));
        }
      );
  }
}
