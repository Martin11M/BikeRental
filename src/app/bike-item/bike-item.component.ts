import { Component, OnInit, Input } from '@angular/core';
import { Bike } from '../bikes-subtable/bike';

@Component({
  selector: 'app-bike-item',
  templateUrl: './bike-item.component.html',
  styleUrls: ['./bike-item.component.scss']
})
export class BikeItemComponent implements OnInit {

  @Input() bike: Bike;

  constructor() { }

  ngOnInit() {
  }

  removeBike() {
    //TODO - connect to backend
    // the corresponding bike should be flagged as REMOVED in the database
    console.log(`[TODO] Bike of id ${this.bike.bikeId} is to be deleted now.`);
  }
}
