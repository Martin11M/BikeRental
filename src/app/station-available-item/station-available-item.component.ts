import { Component, OnInit, Input } from '@angular/core';
import { Station } from '../manage-stations-page/station';
import { AvailableStationsService } from '../rent-page/rental-page.service';

@Component({
  selector: 'app-station-available-item',
  templateUrl: './station-available-item.component.html',
  styleUrls: ['./station-available-item.component.scss']
})
export class StationAvailableItemComponent implements OnInit {
 
  @Input() station: Station;
  availableBikes: number;

  constructor(private availableStationsService: AvailableStationsService) { }

  isRented(){
    return this.availableStationsService.isRented;
  }

  ngOnInit() {
    //TODO - connect to backend
    // calculate number of available bikes
    this.availableBikes = 0;
  }

  rentalBike() {
    //TODO - connect to backend
    // chosen bike should be rental
    console.log(`[TODO] Bike was rental from station of id ${this.station.stationId}.`);
    this.availableStationsService.rentBike();
  }
}
