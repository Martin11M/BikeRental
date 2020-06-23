import { Component, OnInit } from '@angular/core';
import {AdminStatisticsService} from '../services/admin-statistics.service';
import {AdminStatistics} from '../admin-statistics-item/admin-statistics';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-statistics',
  templateUrl: './admin-statistics.component.html',
  styleUrls: ['./admin-statistics.component.scss']
})
export class AdminStatisticsComponent implements OnInit {
  adminStatistics = new AdminStatistics();

  constructor(private adminStatisticsService: AdminStatisticsService) { }

  ngOnInit() {
    this.adminStatisticsService.adminStatistics.subscribe(
      adminStatistics => this.adminStatistics = adminStatistics);
  }
}
