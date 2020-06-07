import { Component, OnInit } from '@angular/core';
import {RentalService} from '../services/rental.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.scss']
})
export class UserStatisticsComponent implements OnInit {

  constructor(private userService: UserService, private rentalService: RentalService) { }

  ngOnInit() {
  }

}
