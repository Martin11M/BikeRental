import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from './manage-users.service';
import { User } from './user';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-manage-users-page',
  templateUrl: './manage-users-page.component.html',
  styleUrls: ['./manage-users-page.component.scss']
})
export class ManageUsersPageComponent implements OnInit {

  sortType: string = '';
  sortReverse: boolean = true;
  filterForm: FormControl = new FormControl();

  totalRecords: number;
  page: number;

  users: User[];
  filteredUsers: User[];

  constructor(private manageUsersService: ManageUsersService) {
    this.totalRecords = 0;
    this.page = 1;
   }

  ngOnInit() {
    this.manageUsersService.getUsers().subscribe( users => {
      this.users = users.filter( user => !user.admin);
      this.refillFilteredUsers();
    });
  }

  sortUsers(sortProperty: string) {
    if(sortProperty === '')
      return;

    switch(sortProperty) {
      case 'userId': {
        this.filteredUsers.sort( (a,b) =>
          (a.userId > b.userId) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
        break;
      }
      case 'login': {
        this.filteredUsers.sort( (a,b) =>
          (a.login > b.login) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
        break;
      }
      case 'email': {
        this.filteredUsers.sort( (a,b) =>
          (a.email > b.email) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
        break;
      }
      case 'phoneNumber': {
        this.filteredUsers.sort( (a,b) =>
          (a.phoneNumber > b.phoneNumber) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
        break;
      }
    }
  }

  filterUsers(query: string) {
    if(query === null)
      query = "";
    else
      query = query.toLowerCase();

    if(query)
      this.filteredUsers = this.users.filter( (elem, ind, arr) =>
          (elem.userId.toString().includes(query) || elem.login.includes(query) || elem.email.includes(query)
            || elem.phoneNumber.includes(query)) );
    else
      this.refillFilteredUsers();

    this.page = 1;
    this.sortUsers(this.sortType);
  }

  refillFilteredUsers() {
    this.filteredUsers = this.users;

    this.totalRecords = this.filterUsers.length;
  }
}
