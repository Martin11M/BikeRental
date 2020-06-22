import { Component, OnInit, Input } from '@angular/core';
import { Station } from '../manage-stations-page/station';
import { ManageStationsService } from '../manage-stations-page/manage-stations.service';

@Component({
  selector: 'app-station-item',
  templateUrl: './station-item.component.html',
  styleUrls: ['./station-item.component.scss']
})
export class StationItemComponent implements OnInit {

  @Input() station: Station;
  @Input() includeLatLng: boolean = false;
  isExpanded: boolean
  expandButtonText: string;

  constructor(private manageStationsService: ManageStationsService) { }

  ngOnInit() {
    this.isExpanded = false;
    this.expandButtonText = "Expand station";
  }

  removeStation() {
    this.manageStationsService.removeStation(this.station.stationId).subscribe( result => {
      // if deleted - notify the parent table to remove the station from view
      if(result.code === 1)
        this.manageStationsService.removeStationFromTableSubject.next(this.station.stationId);
      alert(result.text);
    });
  }

  expandButtonBehavior() {
    if(!this.isExpanded)
      this.expandButtonText = "Collapse station";
    else
      this.expandButtonText = "Expand station";
  }
}
