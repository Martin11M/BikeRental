import { Injectable } from '@angular/core';
import { Station } from './station';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ManageStationsService {

  private addStationForm: FormGroup;
  private initialValues: any;

  constructor(private fb: FormBuilder) {
    this.addStationForm = this.fb.group({
      address: ['', [Validators.required, Validators.maxLength(50)]],
      lat: ['52.2309246', [Validators.required, Validators.pattern("^-?[0-9]+(\.[0-9]{1,})?$")]],
      lng: ['21.00893', [Validators.required, Validators.pattern("^-?[0-9]+(\.[0-9]{1,})?$")]],
    });
    this.initialValues = this.addStationForm.value;
  }

  getAddStationForm() : FormGroup {
    this.addStationForm.reset(this.initialValues);
    return this.addStationForm;
  }


  getStations(): Station[] {
    // TODO - connect to backend
    // stations data should be pulled from database

    let tempUsers: Station[] = [
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

    return tempUsers;
  }

  addStation(address: string, lat: number, lng: number) {
    // TODO - connect to backend
    // add the station to database
    console.log(`[TODO] A station should be added to db with address ${address}, latitude ${lat} and longitude ${lng}`);
  }
}
