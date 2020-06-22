import { Injectable } from '@angular/core';
import {UserRentStatistics} from '../user-statistics/user-rent-statistics';
import {User} from '../manage-users-page/user';
import {Rental} from '../rental-history/rental';
import {UserService} from './user.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  headers: HttpHeaders;
  url: string;

  constructor(private userService: UserService, private http: HttpClient) {
    this.url = environment.backendUrl;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.data.token}`
    });
  }

  getUserRentals(allRentals: boolean): Observable<Rental[]> {
    let url = this.url;
    if (allRentals) {
      url += 'admin/rentals';
    } else {
      url += 'api/rentals';
    }

    return this.http.get<Rental[]>(url, {headers: this.headers});
  }

  getUserStatisticsFromRentals = (rentals: Rental[]): UserRentStatistics => {
    const userRentStatistics = new UserRentStatistics();

    userRentStatistics.lastBike = null;
    userRentStatistics.rentedBikes = 0;
    userRentStatistics.totalMoney = 0;
    userRentStatistics.totalTime = 0;

    rentals.forEach(rental => {
      rental.rentalDate = new Date(rental.rentalDate);
      rental.returnDate = new Date(rental.returnDate);

      userRentStatistics.rentedBikes += 1;
      userRentStatistics.totalMoney += rental.price;

      if (rental.returnDate == null) {
        userRentStatistics.lastBike = rental.bike.name;
      } else {
        const timeDiff = Math.abs(rental.returnDate.getTime() - rental.rentalDate.getTime());
        userRentStatistics.totalTime += (timeDiff / (3600 * 1000));
      }
    });

    return userRentStatistics;
  }

  getUserStatistics(allUsers: boolean): Observable<UserRentStatistics> {
    return this.getUserRentals(allUsers).pipe(map(
      (rentals: Rental[]) => {
        return this.getUserStatisticsFromRentals(rentals);
      }
    ));
  }
}
