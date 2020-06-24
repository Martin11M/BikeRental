import { Injectable } from '@angular/core';
import { Station } from '../manage-stations-page/station';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Bike } from '../bikes-subtable/bike';
import { RentalService } from '../services/rental.service';
import { Rental } from '../rental-history/rental';

@Injectable({
  providedIn: 'root'
})
export class AvailableStationsService {
  rentedStation = {
    id: 0,
    address: ''
  }
  rentals: Rental[];
  
  isRented = false;
  private url: string;
  private headers: HttpHeaders;
 
  constructor(private http: HttpClient, private userService: UserService, private rentalService: RentalService) {
    this.rentalService.getUserRentals(false).subscribe(rentals => {
      this.rentals = rentals;
      this.isRented = this.rentals.filter(rental => rental.returnDate === null).length > 0;
      console.log(`this.isRented befor = ${this.isRented}`)
    });
    console.log(`this.isRented = ${this.isRented}`)
    if (this.isRented) {
      console.log(JSON.stringify(this.rentals.filter(rental => rental.returnDate === null)[0]))
      var station = this.rentals.filter(rental => rental.returnDate === null)[0].bike.station;
      this.rentedStation = {
        id: station.stationId,
        address: station.address
      }
    };
    this.url = environment.backendUrl;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userService.data.token}`
    });
  }

  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>(`${this.url}api/stations/getStations`, { headers: this.headers }) as Observable<Station[]>;
  }
  
  getActiveBikes(stationId: number): Observable<Bike[]> {
    const getParams: string = `?stationId=${stationId}`;
    return this.http.get<Bike[]>(`${this.url}api/bikes${getParams}`, {headers: this.headers}) as Observable<Bike[]>;
  }

  makeRental(stationId: number) : Observable<{ code: number, text: string }> {
    const postParams: string = `?stationId=${stationId}`;
    return this.http.post<{ code: number, text: string }>(`${this.url}api/rentals${postParams}`, null, {headers: this.headers});
  }

  endRental(stationId: number) {
    const putParams: string = `?stationId=${stationId}`;
    return this.http.put<{ code: number, text: string }>(`${this.url}api/rentals${putParams}`, null, {headers: this.headers});
  }
}
