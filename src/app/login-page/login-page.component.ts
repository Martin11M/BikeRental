import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean;
  error: boolean;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.loading = false;
    this.error = false;
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

  logUser() {
    this.error = false;
    this.loading = true;
    this.loginService.logIn(this.username, this.password).subscribe((data) => {
      console.log('[data]', data.token);
      if (data.token.length > 0) {
        data.admin ? this.router.navigate(['/admin-dashboard']) : this.router.navigate(['/user-dashboard']);
      } else {
        this.error = true;
      }
    });
    this.loading = false;
  }
}
