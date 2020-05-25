import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { NavbarOption } from './navbarOption';

@Injectable({ providedIn: 'root' })
export class NavbarService {
  constructor(private user: UserService) {}

  adminOptions: NavbarOption[] = [
    { name: 'Dashboard', path: '/admin-dashboard' },
    { name: 'Manage users', path: '/manage-users-page' },
    { name: 'Manage stations', path: '/manage-stations-page' },
  ] 

  userOptions: NavbarOption[] = [
    { name: 'Dashboard', path: '/user-dashboard' },
    { name: 'Rent bike', path: '/rent-page' },
  ]

  getOptions() {
    return this.user.data.isAdmin ? this.adminOptions : this.userOptions;
  }
}
