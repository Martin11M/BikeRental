import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'; 
import {environment } from '../../environments/environment';
import { User } from './user';
import { UserService } from '../services/user.service';
import { FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ManageUsersService {

  constructor() {

  }

  getUsers(): User[] {
    // TODO
    let tempUsers: User[] = [
      { 
        "userId": "3",
        "email": "user1@gmail.com",
        "phoneNumber": "111222333",
        "login": "user1",
        "active": true,
        "admin": false,
      },
      { 
        "userId": "6",
        "email": "ala@gmail.com",
        "phoneNumber": "123123124",
        "login": "ala1",
        "active": true,
        "admin": false,
      },
      { 
        "userId": "4",
        "email": "user2@gmail.com",
        "phoneNumber": "444555666",
        "login": "user2",
        "active": true,
        "admin": false,
      },
      { 
        "userId": "5",
        "email": "user3@gmail.com",
        "phoneNumber": "777888999",
        "login": "user3",
        "active": true,
        "admin": false,
      },
    ]

    return tempUsers;
  }
}
