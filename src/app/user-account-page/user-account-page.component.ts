import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-account-page',
  templateUrl: './user-account-page.component.html',
  styleUrls: ['./user-account-page.component.scss']
})
export class UserAccountPageComponent implements OnInit {

  constructor(public user: UserService) { }

  ngOnInit() {
    this.user.setLoggedInUserData().subscribe((data) => {
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
