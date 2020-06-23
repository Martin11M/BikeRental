import { Component, OnInit, Input } from '@angular/core';
import { AvailableStationsService } from '../rent-page/rental-page.service';
import { Station } from '../manage-stations-page/station';

@Component({
  selector: 'app-return-bike-rental',
  templateUrl: './return-bike-rental.component.html',
  styleUrls: ['./return-bike-rental.component.scss']
})
export class ReturnBikeRentalComponent implements OnInit {
  @Input() station: Station;

  rentedStation = {
    id: 0,
    address: ''
  }

  constructor(private availableStationsService: AvailableStationsService) { }

  ngOnInit() {
    // TODO
    // check if bike was rented
    this.rentedStation.id = 3;
    this.rentedStation.address = "S-o-m-e-t-h-i-n-g"
  }

  getStationsList() {
    return this.availableStationsService.getStations().map(station => station.address);
  }

  returnBike() {
    //TODO - connect to backend
    // chosen bike should be rental
    console.log(`[TODO] Bike was return`);
    this.availableStationsService.returnBike();
  }
}
