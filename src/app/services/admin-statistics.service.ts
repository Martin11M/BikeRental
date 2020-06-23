import { Injectable } from '@angular/core';
import {ManageUsersService} from '../manage-users-page/manage-users.service';
import {ManageStationsService} from '../manage-stations-page/manage-stations.service';
import {RentalService} from './rental.service';
import {AdminStatistics} from '../admin-statistics-item/admin-statistics';
import {forkJoin, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminStatisticsService {
  constructor(private manageUsersService: ManageUsersService,
              private manageStationsService: ManageStationsService,
              private rentalService: RentalService) { }

  get adminStatistics(): Observable<AdminStatistics> {
    return forkJoin(
      this.rentalService.getUserRentals(true),
      this.manageStationsService.getStations(),
      this.manageUsersService.getUsers()
    ).pipe(
      map(([rentals, stations, users]) => {
        const adminStatistics = new AdminStatistics();
        const usersRentStatistics = this.rentalService.getUserStatisticsFromRentals(rentals);

        adminStatistics.usersCount = users.filter(user => user.active && !user.admin).length;
        adminStatistics.stationsCount = stations.filter(station => !station.deleted).length;
        adminStatistics.activeRentedBikes = rentals.filter(rental => rental.returnDate == null).length;
        adminStatistics.allRentedBikes = rentals.length;
        adminStatistics.totalUserTime = usersRentStatistics.totalTime;
        adminStatistics.totalUserMoney = usersRentStatistics.totalMoney;

        return adminStatistics;
      })
    );
  }
}
