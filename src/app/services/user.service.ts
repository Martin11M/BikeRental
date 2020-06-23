import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "../manage-users-page/user";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class UserService {
  loginForm: FormGroup;
  data: any;
  loggedUser: User;
  url: string;
  headers: HttpHeaders;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      login: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.data = null;
    this.url = environment.backendUrl;

    this.loggedUser = new User();

    this.loggedUser.login = this.loginForm.get("login").value;
  }

  setLoggedInUserData() {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `${this.data.token}`,
    });

    return this.http
      .get(`${this.url}api/users/currentUser`, { headers: this.headers }) as Observable<any>;
  }

  get username() {
    return this.loginForm.get("login").value;
  }
  get password() {
    return this.loginForm.get("password").value;
  }

  get isAdmin() {
    return this.data.admin;
  }
}
