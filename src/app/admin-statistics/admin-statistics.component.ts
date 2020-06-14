import { Component, OnInit } from '@angular/core';
import {AdminStatisticsService} from '../services/admin-statistics.service';
import {AdminStatistics} from '../admin-statistics-item/admin-statistics';

@Component({
  selector: 'app-admin-statistics',
  templateUrl: './admin-statistics.component.html',
  styleUrls: ['./admin-statistics.component.scss']
})
export class AdminStatisticsComponent implements OnInit {
  all = '*';

  constructor(private adminStatisticsService: AdminStatisticsService) { }

  ngOnInit() {
  }

  get adminStatistics(): AdminStatistics {
    return this.adminStatisticsService.adminStatistics;
  }
}
