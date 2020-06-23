import { Component, OnInit } from '@angular/core';
import {RentalService} from '../services/rental.service';
import {UserService} from '../services/user.service';
import {UserRentStatistics} from './user-rent-statistics';

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.scss']
})
export class UserStatisticsComponent implements OnInit {
  userStatistics = new UserRentStatistics();

  constructor(private userService: UserService, private rentalService: RentalService) { }

  ngOnInit() {
    this.rentalService.getUserStatistics(false).subscribe(
      (userStatistics: UserRentStatistics) =>
    this.userStatistics = userStatistics);
  }

}
