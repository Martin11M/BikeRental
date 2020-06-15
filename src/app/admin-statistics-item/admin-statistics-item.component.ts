import {Component, Input, OnInit} from '@angular/core';
import {AdminStatistics} from './admin-statistics';

@Component({
  selector: 'app-admin-statistics-item',
  templateUrl: './admin-statistics-item.component.html',
  styleUrls: ['./admin-statistics-item.component.scss']
})
export class AdminStatisticsItemComponent implements OnInit {

  @Input() adminStatistics: AdminStatistics;
  constructor() { }

  ngOnInit() {
  }

}
