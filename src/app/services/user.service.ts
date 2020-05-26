import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class UserService {

  loginForm: FormGroup;
  data: any;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: ['admin1', Validators.required],
      password: ['123', Validators.required],
    });
    this.data = null;
  }

  get username() {
    return this.loginForm.get('login').value;
  }
  get password() {
    return this.loginForm.get('password').value;
  }
}
