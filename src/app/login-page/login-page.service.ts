import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'; 

@Injectable({ providedIn: 'root' })
export class LoginService {
  url: string;
  headers: HttpHeaders;
  private loggedIn = new BehaviorSubject<boolean>(false);
  
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient) {
    this.url = 'https://apsi-bike-rental.herokuapp.com/';
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });
  }

  logIn(username, password): Observable<{token: string, admin: boolean}> {
    const parameters = `?username=${username}&password=${password}`;
    this.loggedIn.next(true);
    return this.http.post(
      `${this.url}token${parameters}`,
      {},
      { headers: this.headers }
    ) as Observable<{token: string, admin: boolean}>;
  }

  logout() {
    this.loggedIn.next(false);
    // TODO
    // this.router.navigate(['/login']);
  }
}
