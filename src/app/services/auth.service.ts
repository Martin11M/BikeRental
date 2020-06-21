import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private user: UserService) {}
  logout(): void {
    sessionStorage.setItem('isLoggedIn', 'false');
    sessionStorage.removeItem('token');
    this.user.loginForm.get('login').setValue('');
    this.user.loginForm.get('password').setValue('');
  }
  isLoggedIn(): boolean {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
      return true;
    }
    return false;
  }
}
