import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../manage-users-page/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  loginForm: FormGroup;
  data: any;
  loggedUser: User;
  url: string;
  headers: HttpHeaders;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.data = null;
    this.url = environment.backendUrl;

    this.loggedUser = new User();
    this.loggedUser.login = this.loginForm.get('login').value;

  }

  setUser(){//p, n, e, l) {
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET',
      'Authorization': `Bearer ${this.data.token}`
    });

    this.http.get(`${this.url}api/users/currentUser`, {headers: this.headers}).subscribe(
      data => {
        console.log(data);
      }
    );
    // this.loggedUser = {
    //   ...this.loggedUser,
    //   password: p,
    //   phoneNumber: n,
    //   email: e,
    //   login: l
    // };

  }

  get username() {
    return this.loginForm.get('login').value;
  }
  get password() {
    return this.loginForm.get('password').value;
  }
}
