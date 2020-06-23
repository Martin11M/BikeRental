import { Injectable } from '@angular/core';
import { Station } from '../manage-stations-page/station';

@Injectable({
  providedIn: 'root'
})
export class AvailableStationsService {
  isRented = false;

  constructor() {
    this.isRented = this.checkIfBikeIsRented();

  }

  checkIfBikeIsRented(): boolean {
    // TODO 
    return false;
  }

  rentBike() {
    this.isRented = true;
  }

  returnBike() {
    this.isRented = false;
  }

  getStations(): Station[] {
    // TODO - connect to backend
    // stations data should be pulled from database

    let tmpStations: Station[] = [
      { 
        stationId: 1,
        address: "Some street 11",
        lat: 52.2352,
        lng: 21.0050,
      },
      { 
        stationId: 2,
        address: "Some street 64",
        lat: 52.2360,
        lng: 21.0059,
      },
      { 
        "stationId": 3,
        "address": "Other street 22",
        lat: 52.2370,
        lng: 21.0052,
      },
      { 
        stationId: 4,
        address: "Name name 10",
        lat: 52.2350,
        lng: 21.0032,
      },
    ]

    return tmpStations;
  }
}
