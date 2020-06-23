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

  promoteUser(userId: number): Observable<{ code: number, text: string }> {
    const postParams: string = `${userId}?isAdmin=true`;
    return this.http.post<{ code: number, text: string }>(`${this.url}admin/users/permissions/${postParams}`, null, {headers: this.headers});
  }

  removeUser(userId: number) {
    return this.http.post<{ code: number, text: string }>(`${this.url}admin/users/deactivate/${userId}`, null, {headers: this.headers});
  }
}
