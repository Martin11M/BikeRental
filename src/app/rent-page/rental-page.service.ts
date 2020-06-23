import { Injectable } from '@angular/core';
import { Station } from '../manage-stations-page/station';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Bike } from '../bikes-subtable/bike';

@Injectable({
  providedIn: 'root'
})
export class AvailableStationsService {
  rentedStation = {
    id: 0,
    address: ''
  }
  isRented = false;
  private url: string;
  private headers: HttpHeaders;
  
  constructor(private http: HttpClient, private userService: UserService) {
    this.isRented = this.checkIfBikeIsRented();
    this.url = environment.backendUrl;

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userService.data.token}`
    });
  }

  ngOnInit() {
    //TODO
    if (this.isRented) {
      this.rentedStation = {
        id: 3,
        address: "S-o-m-e-t-h-i-n-g"
      }
    }
  }

  checkIfBikeIsRented(): boolean {
    // TODO 
    return false;
  }

  rentBike(station: Station) {
    this.rentedStation = {
      id: station.stationId,
      address: station.address
    }
    console.log(JSON.stringify(this.rentedStation))
    this.isRented = true;
    // this.manageStationsService.addStation(
    //   this.addStationForm.get('address').value,
    //   this.addStationForm.get('lat').value,
    //   this.addStationForm.get('lng').value).subscribe( result => {
    //     if(result.code === 1)
    //       this.back();
    //     else
    //       alert(result.text);
    //   });
  }

  returnBike() {
    this.isRented = false;
  }

  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>(`${this.url}api/stations/getStations`, { headers: this.headers }) as Observable<Station[]>;
  }
  
  getActiveBikes(stationId: number): Observable<Bike[]> {
    const getParams: string = `?stationId=${stationId}`;
    return this.http.get<Bike[]>(`${this.url}api/bikes${getParams}`, {headers: this.headers}) as Observable<Bike[]>;
  }

//   Authorization *
// string
// (header)
	
// Authorization
// stationId *
// integer($int64)
  makeRental(stationId: number) {
    const body = { station: { stationId: stationId } };
    return this.http.post<Bike>(`${this.url}api/rental`, body, {headers: this.headers});
  }

//   Authorization *
// string
// (header)
	
// Authorization
// stationId *
// integer($int64)
// (query)
	
// stationId
  endRental(stationId: number) {
    const putParams: string = `?stationId=${stationId}`;
    return this.http.put<{ code: number, text: string }>(`${this.url}admin/stations/deleteStation${putParams}`, null, {headers: this.headers});
  }
}
