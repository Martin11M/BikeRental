import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  user:  User;
  
  constructor() { }

  ngOnInit() {
    this.user = {
      login: `MyLoginName`,
      isAdmin: true
    }
  }

  get login() {
    return this.user.login;
  }

  get isAdmin() {
    return this.user.isAdmin;
  }
}
