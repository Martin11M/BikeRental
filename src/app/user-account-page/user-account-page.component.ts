import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-account-page',
  templateUrl: './user-account-page.component.html',
  styleUrls: ['./user-account-page.component.scss']
})
export class UserAccountPageComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.setUser();
  }

}
