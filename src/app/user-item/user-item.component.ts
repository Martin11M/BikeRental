import { Component, OnInit, Input } from '@angular/core';
import { User } from '../manage-users-page/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

  removeUser() {
    //TODO - connect to backend
    // the corresponding user should be marked as deleted
    console.log(`[TODO] User of id ${this.user.userId} is to be deleted now.`);
  }
}
