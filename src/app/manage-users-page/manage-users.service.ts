import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class ManageUsersService {

  constructor() {

  }

  getUsers(): User[] {
    // TODO - connect to backend
    // user data should be pulled from database

    let tempUsers: User[] = [
      {
        "userId": "3",
        "email": "user1@gmail.com",
        "phoneNumber": "111222333",
        "login": "user1",
        "active": true,
        "admin": false,
        "password": "123"
      },
      {
        "userId": "6",
        "email": "ala@gmail.com",
        "phoneNumber": "123123124",
        "login": "ala1",
        "active": true,
        "admin": false,
        "password": "123"
      },
      {
        "userId": "4",
        "email": "user2@gmail.com",
        "phoneNumber": "444555666",
        "login": "user2",
        "active": true,
        "admin": false,
        "password": "123"
      },
      {
        "userId": "5",
        "email": "user3@gmail.com",
        "phoneNumber": "777888999",
        "login": "user3",
        "active": true,
        "admin": false,
        "password": "123"
      },
    ]

    return tempUsers;
  }

  promoteUser(userId: string) {
    // TODO - connect to backend
    // user of the given id should be set to admin
    console.log(`[TODO] User of id  ${userId} should be promoted to admin`);
  }
}
