import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../manage-users-page/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  loginForm: FormGroup;
  data: any;
  loggedUser: User;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.data = null;
    this.loggedUser = new User();
    this.loggedUser.login = this.loginForm.get('login').value;
    this.loggedUser.userId = 1;
    this.loggedUser.email = 'mail@mail.com';
    this.loggedUser.phoneNumber = '999999999';
  }

  get username() {
    return this.loginForm.get('login').value;
  }
  get password() {
    return this.loginForm.get('password').value;
  }
}
