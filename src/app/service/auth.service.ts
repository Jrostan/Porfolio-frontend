import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:3200/api";
  token: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(email: string, password: string) {
    this.http.post(this.url + '/autenticarte', {email: email, password: password}).subscribe(
      (resp: any) => {
        this.router.navigate(['profile']);
        localStorage.setItem('auth_token', resp.token);
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn() : boolean {
   // return (localStorage.getItem('token') !== null)
   return true
  }
}
