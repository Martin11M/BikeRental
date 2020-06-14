import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../navbar/navbar.service';
import {NavbarOption} from '../navbar/navbarOption';

@Component({
  selector: 'app-admin-navigate',
  templateUrl: './admin-navigate.component.html',
  styleUrls: ['./admin-navigate.component.scss']
})
export class AdminNavigateComponent implements OnInit {
  maxRowElements = 2;

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
  }

  get navbarAdminButtons(): NavbarOption[] {
    return this.navbarService.adminOptions
      .filter(option => option.img != null);
  }

}
