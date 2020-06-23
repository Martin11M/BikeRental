import { Component, OnInit, Input } from '@angular/core';
import { Station } from '../manage-stations-page/station';
import { AvailableStationsService } from '../rent-page/rental-page.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-station-available-item',
  templateUrl: './station-available-item.component.html',
  styleUrls: ['./station-available-item.component.scss']
})
export class StationAvailableItemComponent implements OnInit {
 
  @Input() station: Station;
  allActiveBikes: number;

  constructor(private availableStationsService: AvailableStationsService) { }

  availableBikes(stationId: number) {
    
    return stationId;
  }

  isRented(){
    return this.availableStationsService.isRented;
  }

  ngOnInit() {
    this.availableStationsService.getActiveBikes(this.station.stationId).subscribe(bikes => {
      this.allActiveBikes = bikes.length;
    });
  }

  rentBike() {
    //TODO - connect to backend
    // chosen bike should be rental
    console.log(`[TODO] Bike was rental from station of id ${this.station.stationId}.`);
    this.availableStationsService.rentBike(this.station);
  }
}
