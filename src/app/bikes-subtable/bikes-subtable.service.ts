import { Injectable } from '@angular/core';
import { Bike } from './bike';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from '../services/user.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikesSubtableService {

  private addBikeForm: FormGroup;
  private url: string;
  private headers: HttpHeaders;

  // used by child components to notify parent table of object deletions
  removeBikeFromTableSubject: Subject<number> = new Subject<number>();

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

  getAddBikeForm(): FormGroup {
    this.addBikeForm.reset();
    return this.addBikeForm;
  }

  getBikesByStationId(stationId: number): Observable<Bike[]> {
    const getParams: string = `?stationId=${stationId}`;
    return this.http.get<Bike[]>(`${this.url}api/bikes${getParams}`, {headers: this.headers});
  }

  getAllBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(`${this.url}admin/bikes`, {headers: this.headers});
  }

  addBike(stationId: number, bikeName: string) {
    const body = { station: { stationId: stationId }, name: bikeName };
    return this.http.post<Bike>(`${this.url}admin/bikes/add`, body, {headers: this.headers});
  }

  removeBike(bike: Bike): Observable<{ code: number, text: string }> {
    return this.http.post<{ code: number, text: string }>(`${this.url}admin/bikes/deactivate/${bike.bikeId}`, null, {headers: this.headers});
  }
}
