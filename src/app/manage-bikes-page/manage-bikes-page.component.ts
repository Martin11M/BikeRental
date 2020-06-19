import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-bikes-page',
  templateUrl: './manage-bikes-page.component.html',
  styleUrls: ['./manage-bikes-page.component.scss']
})
export class ManageBikesPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addBike() {
    this.router.navigate(['/add-bike-window']);
  }
}
