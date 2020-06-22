import { Injectable } from '@angular/core';
import {ManageUsersService} from '../manage-users-page/manage-users.service';
import {ManageStationsService} from '../manage-stations-page/manage-stations.service';
import {RentalService} from './rental.service';
import {AdminStatistics} from '../admin-statistics-item/admin-statistics';
import {UserRentStatistics} from '../user-statistics/user-rent-statistics';
import {forkJoin, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Rental} from '../rental-history/rental';

@Injectable({
  providedIn: 'root'
})
export class AdminStatisticsService {
  constructor(private manageUsersService: ManageUsersService,
              private manageStationsService: ManageStationsService,
              private rentalService: RentalService) { }

  get adminStatistics(): Observable<AdminStatistics> {
    return forkJoin(
      this.rentalService.getUserRentals(true)).pipe(
      map(([rentals]) => {
        const adminStatistics = new AdminStatistics();
        const usersRentStatistics = this.rentalService.getUserStatisticsFromRentals(rentals);

        adminStatistics.usersCount = this.usersCount;
        adminStatistics.stationsCount = this.stationsCount;
        adminStatistics.activeRentedBikes = rentals.filter(rental => rental.returnDate == null).length;
        adminStatistics.allRentedBikes = rentals.length;
        adminStatistics.totalUserTime = usersRentStatistics.totalTime;
        adminStatistics.totalUserMoney = usersRentStatistics.totalMoney;

        return adminStatistics;
      })
    );
  }

  get usersCount(): number {
    return this.manageUsersService.getUsers().length;
  }

  get stationsCount(): number {
    // TODO - think of something to make this work
    //return this.manageStationsService.getStations().length;
    return 0;
  }
}
