import { Component, OnInit, Input } from '@angular/core';
import { AvailableStationsService } from '../rent-page/rental-page.service';
import { Station } from '../manage-stations-page/station';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-return-bike-rental',
  templateUrl: './return-bike-rental.component.html',
  styleUrls: ['./return-bike-rental.component.scss']
})
export class ReturnBikeRentalComponent implements OnInit {
  // @Input() station: Station;

  allStations: Observable<any>;

  constructor(private availableStationsService: AvailableStationsService) { }

  ngOnInit() {
    this.allStations = this.getStationsList();
  }

  get rentedStation () {
    return this.availableStationsService.rentedStation;
  }
  getStationsList() {
    return this.availableStationsService.getStations().pipe(
      map(stations => stations.map(station => station.address))
    );
  }

  returnBike() {
    var stationId = 1;
    console.log(`Attempt to return bike to station of id ${stationId}.`);
    this.availableStationsService.endRental(stationId).subscribe( result => {
      if(result.code === 1) {
        this.availableStationsService.rentedStation = {
          id: 0,
          address: ""
        }
        this.availableStationsService.isRented = false;
      }
      else
        alert(result.text);
    });
  }
}
