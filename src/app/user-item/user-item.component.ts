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
    //TODO - connect to backend
    // the corresponding user should be marked as deleted
    console.log(`[TODO] User of id ${this.user.userId} is to be deleted now.`);
  }

  promoteUser() {
    this.manageUsersService.promoteUser(this.user.userId).subscribe( result => {
      // if deleted - notify the parent table to remove the station from view
      if(result.code === 1)
        this.manageUsersService.removeUserFromTableSubject.next(this.user.userId);
      alert(result.text);
    });
  }
}
