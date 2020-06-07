import {Component, Input, OnInit} from '@angular/core';
import {UserRentStatistics} from '../user-statistics/user-rent-statistics';

@Component({
  selector: 'app-user-statistics-item',
  templateUrl: './user-statistics-item.component.html',
  styleUrls: ['./user-statistics-item.component.scss']
})
export class UserStatisticsItemComponent implements OnInit {

  @Input() userRentStatistics: UserRentStatistics;
  constructor() { }

  ngOnInit() {
  }

}
