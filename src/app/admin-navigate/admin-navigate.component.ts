import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../navbar/navbar.service';
import {NavbarOption} from '../navbar/navbarOption';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navigate',
  templateUrl: './admin-navigate.component.html',
  styleUrls: ['./admin-navigate.component.scss']
})
export class AdminNavigateComponent implements OnInit {
  maxRowElements = 2;

  constructor(private navbarService: NavbarService, private router: Router) { }

  ngOnInit() {
  }

  get navbarAdminButtons(): NavbarOption[] {
    return this.navbarService.adminOptions
      .filter(option => option.img != null);
  }

  navigate(destination: string) {
    this.router.navigate([`/${destination}`]);
  }
}
