import { Component, OnInit, Input } from '@angular/core';
import { Station } from '../manage-stations-page/station';

@Component({
  selector: 'app-station-item',
  templateUrl: './station-item.component.html',
  styleUrls: ['./station-item.component.scss']
})
export class StationItemComponent implements OnInit {

  @Input() station: Station;

  constructor() { }

  ngOnInit() {
  }

  removeStation() {
    //TODO
    console.log(`[TODO] Station of id ${this.station.stationId} is to be deleted now.`);
  }
}
