import { Injectable } from '@angular/core';
import { Bike } from './bike';

@Injectable({
  providedIn: 'root'
})
export class BikesSubtableService {

  constructor() { }

  getBikesByStationId(stationId: number): Bike[] {
      // TODO - connect to backend
      // bike data should be pulled from the database
      // get bikes for the given station

      return [
        { 
          bikeId: 1,
          name: "Big bike",
          status: "FREE",
          station: {
            stationId: stationId,
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
            stationId: stationId,
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
            stationId: stationId,
            address: "test",
            lat: 21.0053,
            lng: 52.2354,
          },
        },
      ];
  }

  getAllBikes() : Bike[] {
      // TODO - connect to backend
      // bike data should be pulled from the database
      // get bikes from all stations, even if they are deleted

      return [
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
            stationId: 1,
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
            stationId: 2,
            address: "test",
            lat: 21.0053,
            lng: 52.2354,
          },
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
          station: {
            stationId: 3,
            address: "test 2",
            lat: 21.0053,
            lng: 52.2354,
          },
        },
      ];
  }
}
