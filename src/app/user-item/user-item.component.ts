import { Component, OnInit, Input } from '@angular/core';
import { User } from '../manage-users-page/user';
import { ManageUsersService } from '../manage-users-page/manage-users.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() user: User;
  @Input() removalPossible = true;

  constructor(private manageUsersService: ManageUsersService) { }

  ngOnInit() {
  }

  removeUser() {
    this.manageUsersService.removeUser(this.user.userId).subscribe( result => {
      // if deleted - notify the parent table to remove the user from view
      if(result.code === 1)
        this.manageUsersService.removeUserFromTableSubject.next(this.user.userId);
      alert(result.text);
    });
  }

  promoteUser() {
    this.manageUsersService.promoteUser(this.user.userId).subscribe( result => {
      // if promoted - notify the parent table to remove the user from view (admins are not viewed)
      if(result.code === 1)
        this.manageUsersService.removeUserFromTableSubject.next(this.user.userId);
      alert(result.text);
    });
  }
}
