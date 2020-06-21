import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router,
} from '@angular/router';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService, private user: UserService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.auth.isLoggedIn()) {
      return true;
    }
    // navigate to login page as user is not authenticated
    this.user.data.admin ?
      this.router.navigate(['/admin-dashboard'])
      : this.router.navigate(['/user-dashboard']);
    return false;
  }
}
