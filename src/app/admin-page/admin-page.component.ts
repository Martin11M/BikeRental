import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
    //console.log('nice!');
  }

  get login() {
    return this.user.username;
  }
}
