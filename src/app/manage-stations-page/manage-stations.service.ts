import { Injectable } from '@angular/core';
import { Station } from './station';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageStationsService {

  private addStationForm: FormGroup;
  private initialValues: any;
  private url: string;
  private headers: HttpHeaders;

  // used by child components to notify parent table of object deletions
  removeStationFromTableSubject: Subject<number> = new Subject<number>();

  constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService) {
    this.addStationForm = this.fb.group({
      address: ['', [Validators.required, Validators.maxLength(50)]],
      lat: ['52.2309246', [Validators.required, Validators.pattern("^-?[0-9]+(\.[0-9]{1,})?$")]],
      lng: ['21.00893', [Validators.required, Validators.pattern("^-?[0-9]+(\.[0-9]{1,})?$")]],
    });
    this.initialValues = this.addStationForm.value;

    this.url = environment.backendUrl;

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userService.data.token}`
    });
  }

  getAddStationForm() : FormGroup {
    this.addStationForm.reset(this.initialValues);
    return this.addStationForm;
  }
  

  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>(`${this.url}api/stations/getStations`, {headers: this.headers});
  }

  addStation(address: string, lat: number, lng: number): Observable<{ code: number, text: string }> {
    const body = {
      address: address,
      lat: lat,
      lng: lng
    };
    return this.http.post<{ code: number, text: string }>(`${this.url}admin/stations/addStation`, body, {headers: this.headers});
  }

  removeStation(stationId: number) {
    const putParams: string = `?stationId=${stationId}`;
    return this.http.put<{ code: number, text: string }>(`${this.url}admin/stations/deleteStation${putParams}`, null, {headers: this.headers});
  }
}
