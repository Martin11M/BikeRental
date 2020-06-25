import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { NavbarOption } from './navbarOption';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarOptions: NavbarOption[];

  constructor(private navbar: NavbarService, private router: Router, private auth: AuthService, public user: UserService) { }

  ngOnInit() {
    this.navbarOptions = this.navbar.getOptions();
  }

  redirect(path: string) {
    this.router.navigate([path]);
  }

  logOut() {
    this.auth.logout();
    this.router.navigate(['']);
  }
}
