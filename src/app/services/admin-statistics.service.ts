import { Injectable } from '@angular/core';
import {ManageUsersService} from '../manage-users-page/manage-users.service';
import {ManageStationsService} from '../manage-stations-page/manage-stations.service';
import {RentalService} from './rental.service';
import {AdminStatistics} from '../admin-statistics-item/admin-statistics';
import {UserRentStatistics} from '../user-statistics/user-rent-statistics';

@Injectable({
  providedIn: 'root'
})
export class AdminStatisticsService {
  all = '*';

  constructor(private manageUsersService: ManageUsersService,
              private manageStationsService: ManageStationsService,
              private rentalService: RentalService) { }

  get adminStatistics(): AdminStatistics {
    const adminStatistics = new AdminStatistics();
    const usersRentStatistics = this.usersRentStatistics;

    adminStatistics.usersCount = this.usersCount;
    adminStatistics.stationsCount = this.stationsCount;
    adminStatistics.activeRentedBikes = this.activeRentalsCount;
    adminStatistics.allRentedBikes = this.allRentalsCount;
    adminStatistics.totalUserTime = usersRentStatistics.totalTime;
    adminStatistics.totalUserMoney = usersRentStatistics.totalMoney;

    return adminStatistics;
  }

  get usersCount(): number {
    return this.manageUsersService.getUsers().length;
  }

  get stationsCount(): number {
    return this.manageStationsService.getStations().length;
  }

  get allRentalsCount(): number {
    return this.rentalService.getUserRentals(this.all).length;
  }

  get activeRentalsCount(): number {
    return this.rentalService.getUserRentals(this.all)
      .filter(rental => rental.returnDate == null).length;
  }

  get usersRentStatistics(): UserRentStatistics {
    return this.rentalService.getUserStatistics(this.all);
  }
}
