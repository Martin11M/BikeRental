import { Injectable } from '@angular/core';
import { Bike } from './bike';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikesSubtableService {

  private addBikeForm: FormGroup;
  private url: string;
  private headers: HttpHeaders;

  constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService)  { 
    this.addBikeForm = this.fb.group({
      station: ['', [Validators.required, Validators.pattern("^[1-9][0-9]*$")]],
      bikeName: ['', [Validators.required, Validators.maxLength(30)]],
    });

    this.url = environment.backendUrl;

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userService.data.token}`
    });
  }

  getAddBikeForm() : FormGroup {
    this.addBikeForm.reset();
    return this.addBikeForm;
  }

  getBikesByStationId(stationId: number): Observable<Bike[]> {
    const getParams: string = `?stationId=${stationId}`;
    return this.http.get<Bike[]>(`${this.url}api/bikes${getParams}`, {headers: this.headers});
  }

  getAllBikes() : Observable<Bike[]> {
    return this.http.get<Bike[]>(`${this.url}admin/bikes`, {headers: this.headers});
  }

  addBike(stationId: number, bikeName: string) {
    const body = { station: { stationId: stationId }, name: bikeName };
    return this.http.post<Bike>(`${this.url}admin/bikes/add`, body, {headers: this.headers});
  }

  removeBike(bike: Bike) {
    //TODO - connect to backend
    // the corresponding bike should be flagged as REMOVED in the database
    console.log(`[TODO] Bike of id ${bike.bikeId} is to be deleted now.`);
  }
}
