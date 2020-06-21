import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  registeredUser: any;
  url: string;
  headers: HttpHeaders;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.url = environment.backendUrl;
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });

    this.registrationForm = this.fb.group({
      login: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  registerUser() {
    this.registeredUser = {
      userId: 'id',
      email: this.registrationForm.get('email').value,
      phoneNumber: this.registrationForm.get('number').value,
      login: this.registrationForm.get('login').value,
      active: true,
      admin: false,
      password: this.registrationForm.get('password').value,
    };
    console.log(this.registeredUser);

    // const parameters = `?username=${username}&password=${password}`;
    this.http.post(`${this.url}`, this.registeredUser, {headers: this.headers}).subscribe(
      data => console.log(data)
    );
  }

  logIn() {
    this.router.navigate(['/registration']);
  }
}
