import { Injectable } from '@angular/core';
import { User } from './user';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ManageUsersService {

  private url: string;
  private headers: HttpHeaders;

  removeUserFromTableSubject: Subject<number> = new Subject<number>();

  constructor(private http: HttpClient, private userService: UserService) {
    this.url = environment.backendUrl;

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userService.data.token}`
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}admin/users`, {headers: this.headers});
  }

  promoteUser(userId: number) {
    // TODO - connect to backend
    // user of the given id should be set to admin
    console.log(`[TODO] User of id  ${userId} should be promoted to admin`);
  }
}
