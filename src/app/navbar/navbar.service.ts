import { Injectable } from '@angular/core';
import { NavbarOption } from './navbarOption';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class NavbarService {
  constructor(private auth: AuthService) {}

  adminOptions: NavbarOption[] = [
    { name: 'Dashboard', path: '/admin-dashboard' },
    { name: 'Manage users', path: '/manage-users-page' },
    { name: 'Manage stations', path: '/manage-stations-page' },
  ];

  userOptions: NavbarOption[] = [
    { name: 'Dashboard', path: '/user-dashboard' },
    { name: 'Rent bike', path: '/rent-page' },
  ];

  getOptions() {
    return this.auth.isLoggedIn()
      ? this.adminOptions
      : this.userOptions;
  }
}
