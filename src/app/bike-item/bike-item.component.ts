import { Component, OnInit, Input } from '@angular/core';
import { Bike } from '../bikes-subtable/bike';
import { BikesSubtableService } from '../bikes-subtable/bikes-subtable.service';

@Component({
  selector: 'app-bike-item',
  templateUrl: './bike-item.component.html',
  styleUrls: ['./bike-item.component.scss']
})
export class BikeItemComponent implements OnInit {

  @Input() bike: Bike;

  constructor(private bikesSubtableService: BikesSubtableService) { }

  ngOnInit() {
  }

  removeBike() {
    if(this.bike.status !== "FREE")
      return;

    this.bikesSubtableService.removeBike(this.bike);
  }
}
