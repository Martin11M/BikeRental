import { Injectable } from '@angular/core';
import { Bike } from './bike';

@Injectable({
  providedIn: 'root'
})
export class BikesSubtableService {

  constructor() { }

  getBikes(stationId: string): Bike[] {
    let tempBikes: Bike[];

    if(stationId === "*")
    {
      // TODO - connect to backend
      // bike data should be pulled from the database
      // get bikes from all stations, even if they are deleted

      tempBikes = [
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
        { 
          bikeId: 4,
          name: "Bike rm",
          status: "REMOVED",
          station: null,
        },
        { 
          bikeId: 5,
          name: "Bike rent",
          status: "RENTED",
          station: null,
        },
        { 
          bikeId: 6,
          name: "Cool bike",
          status: "FREE",
          station: {stationId: 3, address: "test 2"},
        },
      ];
    }
    else
    {
      // TODO - connect to backend
      // bike data should be pulled from the database
      // get bikes for the given station

      tempBikes = [
        { 
          bikeId: 1,
          name: "Big bike",
          status: "FREE",
          station: {stationId: parseInt(stationId), address: "test"},
        },
        { 
          bikeId: 2,
          name: "Small bike",
          status: "FREE",
          station: {stationId: parseInt(stationId), address: "test"},
        },
        { 
          bikeId: 3,
          name: "Monocycle",
          status: "FREE",
          station: {stationId: parseInt(stationId), address: "test"},
        },
      ];
    }


    return tempBikes;
  }
}
