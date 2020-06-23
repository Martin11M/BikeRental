import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-account-page',
  templateUrl: './user-account-page.component.html',
  styleUrls: ['./user-account-page.component.scss']
})
export class UserAccountPageComponent implements OnInit {

  constructor(public user: UserService) { }

  ngOnInit() {
    this.user.setUser().subscribe((data) => {
      console.log(data);
      this.user.loggedUser = {
        ...this.user.loggedUser,
        phoneNumber: data.phoneNumber,
        email: data.email,
        login: data.login,
        userId: data.userId
      };
    });
  }

}
