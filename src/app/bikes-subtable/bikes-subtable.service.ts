import { Injectable } from '@angular/core';
import { Bike } from './bike';

@Injectable({
  providedIn: 'root'
})
export class BikesSubtableService {

  constructor() { }

  getBikes(stationId: string): Bike[] {
    // TODO - connect to backend
    // bike data should be pulled from the database

    let tempUsers: Bike[] = [
      { 
        bikeId: 1,
        name: "Big bike",
        status: "FREE",
        station: {
          stationId: 1, 
          address: "test", 
          lat: 21.0053,
          lng: 52.2354,
        },
      },
      { 
        bikeId: 2,
        name: "Small bike",
        status: "FREE",
        station: {
          stationId: 2, 
          address: "test", 
          lat: 21.0053,
          lng: 52.2354,
        },
      },
      { 
        bikeId: 3,
        name: "Monocycle",
        status: "FREE",
        station: {
          stationId: 3, 
          address: "test", 
          lat: 21.0053,
          lng: 52.2354,
        },
      },
    ]

    return tempUsers;
  }
}
