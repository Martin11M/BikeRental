import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  url: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.url = 'http://apsi-bike-rental.herokuapp.com/';
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });
  }

  logIn(username, password): Observable<{token: string, admin: boolean}> {
    const parameters = `?username=${username}&password=${password}`;
    return this.http.post(
      `${this.url}token${parameters}`,
      {},
      { headers: this.headers }
    ) as Observable<{token: string, admin: boolean}>;
  }
}
