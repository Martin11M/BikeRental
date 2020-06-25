import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Station } from '../manage-stations-page/station';
import {ManageStationsService} from '../manage-stations-page/manage-stations.service';
import {RentalService} from '../services/rental.service';

@Component({
  selector: 'app-station-available-item',
  templateUrl: './station-available-item.component.html',
  styleUrls: ['./station-available-item.component.scss']
})
export class StationAvailableItemComponent implements OnInit {
  @Input() availableBikesCount = 0;
  @Input() station: Station;
  @Input() isRented: boolean;
  @Output() rentMade = new EventEmitter();

  constructor(private rentalService: RentalService) {
  }

  ngOnInit() {
  }

  rentBike() {
    console.log(`Attempt to rental from station of id ${this.station.stationId}.`);
    this.rentalService.makeRental(this.station.stationId).subscribe( result => {
      if (result.code === 1) {
        this.rentMade.emit(this.station);
      } else {
        alert(result.text);
      }
    });
  }
}
