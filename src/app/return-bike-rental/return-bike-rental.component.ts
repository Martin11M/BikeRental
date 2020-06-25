import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Station } from '../manage-stations-page/station';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ManageStationsService} from "../manage-stations-page/manage-stations.service";
import {RentalService} from "../services/rental.service";

@Component({
  selector: 'app-return-bike-rental',
  templateUrl: './return-bike-rental.component.html',
  styleUrls: ['./return-bike-rental.component.scss']
})
export class ReturnBikeRentalComponent implements OnInit {
  allStations: Array<Station>;
  allStationsAddresses: Array<string>;
  returnStationForm: FormGroup;

  @Input() rentedStation;
  @Output() returnMade = new EventEmitter();
  constructor(private manageStationsService: ManageStationsService,
              private rentalService: RentalService,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.manageStationsService.getStations().pipe().subscribe( stations => {
      this.allStations = stations;
      this.allStationsAddresses = stations.map(station => station.address);
    });

    this.returnStationForm = this.fb.group({
      station: ['Some street 11'],
    });
  }

  returnBike() {
    const returnStationAddress = this.returnStationForm.get('station').value;
    const station = this.allStations.find(s => s.address === returnStationAddress);
    const stationId = station.stationId;
    console.log(`Attempt to return bike to station of id ${stationId}.`);
    this.rentalService.endRental(stationId).subscribe( result => {
      if (result.code === 1) {
        this.returnMade.emit(station);
      } else {
        alert(result.text);
      }
    });
  }
}
