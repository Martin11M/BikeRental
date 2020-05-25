import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { NavbarOption } from './navbarOption';

@Injectable({ providedIn: 'root' })
export class NavbarService {
  constructor(private user: UserService) {}

  getOptions() {
    return [
      { name: 'Hello', path: 'world' },
      { name: 'Hello1', path: 'world' },
      { name: 'Hello2', path: 'world' },
    ] as NavbarOption[];
    // return this.user.data.isAdmin ? ['opcje admina'] : ['opcje usera'];
  }
}
