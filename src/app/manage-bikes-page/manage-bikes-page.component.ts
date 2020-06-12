import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-bikes-page',
  templateUrl: './manage-bikes-page.component.html',
  styleUrls: ['./manage-bikes-page.component.scss']
})
export class ManageBikesPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addBike() {
    // TODO - create a window for adding bikes
    // connect to backend
    // add the bike to database 
    console.log(`[TODO] Window for adding bikes should pop up`);
  }
}
