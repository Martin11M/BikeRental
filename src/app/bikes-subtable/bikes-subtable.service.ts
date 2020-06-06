import { Injectable } from '@angular/core';
import { Bike } from './bike';

@Injectable({
  providedIn: 'root'
})
export class BikesSubtableService {

  constructor() { }

  getBikes(stationId: string): Bike[] {
    // TODO
    let tempUsers: Bike[] = [
      { 
        bikeId: 1,
        name: "Big bike",
        status: "FREE",
        station: {stationId: 1, address: "test"},
      },
      { 
        bikeId: 2,
        name: "Small bike",
        status: "FREE",
        station: {stationId: 1, address: "test"},
      },
      { 
        bikeId: 3,
        name: "Monocycle",
        status: "FREE",
        station: {stationId: 2, address: "test"},
      },
    ]

    return tempUsers;
  }
}
