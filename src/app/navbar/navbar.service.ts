import { Injectable } from '@angular/core';
import { NavbarOption } from './navbarOption';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class NavbarService {
  constructor(private auth: AuthService, private user: UserService) {}

  adminOptions: NavbarOption[] = [
    { name: 'Dashboard', path: '/admin-dashboard', img: null },
    { name: 'Manage users', path: '/manage-users-page', img: 'users' },
    { name: 'Manage stations', path: '/manage-stations-page', img: 'stations' },
    { name: 'Manage bikes', path: '/manage-bikes-page', img: 'bikes' },
    { name: 'Manage rentals', path: '/manage-rentals-page', img: 'rentals' },
  ];

  userOptions: NavbarOption[] = [
    { name: 'Dashboard', path: '/user-dashboard', img: null },
    { name: 'Rent bike', path: '/rent-page', img: null },
  ];

  getOptions() {
    return this.auth.isLoggedIn() && this.user.data.admin
      ? this.adminOptions
      : this.userOptions;
  }
}
