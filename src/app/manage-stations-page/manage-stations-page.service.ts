import { Injectable } from '@angular/core';
import { Station } from './station';

@Injectable({
  providedIn: 'root'
})
export class ManageStationsService {

  constructor() { }

  getStations(): Station[] {
    // TODO
    let tempUsers: Station[] = [
      { 
        "stationId": 1,
        "address": "Some street 11",
      },
      { 
        "stationId": 2,
        "address": "Some street 64",
      },
      { 
        "stationId": 3,
        "address": "Other street 22",
      },
      { 
        "stationId": 4,
        "address": "Name name 10",
      },
    ]

    return tempUsers;
  }
}
