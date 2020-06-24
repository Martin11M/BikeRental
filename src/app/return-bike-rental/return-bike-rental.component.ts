import { Component, OnInit, Input } from '@angular/core';
import { AvailableStationsService } from '../rent-page/rental-page.service';
import { Station } from '../manage-stations-page/station';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-return-bike-rental',
  templateUrl: './return-bike-rental.component.html',
  styleUrls: ['./return-bike-rental.component.scss']
})
export class ReturnBikeRentalComponent implements OnInit {
  allStations: Array<Station>;
  allStationsAddresses: Array<string>;
  returnStationForm: FormGroup;
  constructor(private availableStationsService: AvailableStationsService, private fb: FormBuilder) {}

  ngOnInit() {
    this.availableStationsService.getStations().pipe().subscribe( stations => {
      this.allStations = stations;
      this.allStationsAddresses = stations.map(station => station.address);
    });
    
    this.returnStationForm = this.fb.group({
      station: ['Some street 11'],
    });
  }

  get rentedStation () {
    return this.availableStationsService.rentedStation;
  }

  returnBike() {
    var stationId = this.allStations.find(station => station.address === this.returnStationForm.get('station').value).stationId;
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
