import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({ providedIn: "root" })
export class UserService {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get username() {
    return this.loginForm.get('login').value;
  }
  get password() {
    return this.loginForm.get('password').value;
  }
}
