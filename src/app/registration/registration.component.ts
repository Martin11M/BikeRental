import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  registeredUser: any;
  url: string;
  headers: HttpHeaders;
  accountWasCreated: boolean;
  errorText: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.accountWasCreated = false;
    this.errorText = '';
    this.url = environment.backendUrl;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.registrationForm = this.fb.group({
      login: ['', [Validators.required]],
      number: [
        '',
        [
          Validators.required,
          Validators.maxLength(9),
          Validators.minLength(9),
          Validators.pattern('^[0-9]+$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  registerUser() {
    this.registeredUser = {
      email: this.registrationForm.get('email').value,
      phoneNumber: this.registrationForm.get('number').value,
      login: this.registrationForm.get('login').value,
      password: this.registrationForm.get('password').value,
    };

    this.http
      .post(`${this.url}register`, JSON.stringify(this.registeredUser), {
        headers: this.headers,
      })
      .subscribe((data: any) => {
        if (data.code === 1) {
          this.accountWasCreated = true;
          setTimeout(() => {
            this.logIn();
          }, 2000);
        } else {
          this.errorText = data.text;
        }
      });
  }

  logIn() {
    this.router.navigate(['/login']);
  }
}
