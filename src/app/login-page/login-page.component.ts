import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from './login-page.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;    
  loading: boolean;
  error: boolean;

  constructor(private loginService: LoginService, private router: Router, private user: UserService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
    this.loading = false;
    this.error = false;
  }

  get loginForm() {
    return this.user.loginForm as FormGroup;
  }

  logUser() {
    this.error = false;
    this.loading = true;
    this.loginService.logIn(this.user.username, this.user.password).subscribe((data) => {
      this.user.data = data;
      if (data.token.length > 0) {
        data.admin ? this.router.navigate(['/admin-dashboard']) : this.router.navigate(['/user-dashboard']);
      } else {
        this.error = true;
      }
    });
    this.loading = false;
  }
}
