import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Station } from './station';
import { ManageStationsService } from './manage-stations-page.service';

@Component({
  selector: 'app-manage-stations-page',
  templateUrl: './manage-stations-page.component.html',
  styleUrls: ['./manage-stations-page.component.scss']
})
export class ManageStationsPageComponent implements OnInit {

  sortType: string = '';
  sortReverse: boolean = true;
  filterForm: FormControl = new FormControl();

  stations: Station[];
  filteredStations: Station[];

  constructor(private manageStationsService: ManageStationsService) { }

  ngOnInit() {
    this.stations = this.manageStationsService.getStations();
    this.filteredStations = this.stations;
  }

  sortStations(sortProperty: string) {
    if(sortProperty === '')
      return;

      switch(sortProperty) {
        case 'stationId': {
          this.filteredStations.sort( (a,b) =>
            (a.stationId > b.stationId) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
          break;
        }
        case 'address': {
          this.filteredStations.sort( (a,b) =>
            (a.stationId > b.stationId) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
          break;
        }
      }
  }

  filterStations(query: string) {
    if(query)
      this.filteredStations = this.stations.filter( (elem, ind, arr) =>
          (elem.stationId.toString().includes(query) || elem.address.includes(query)) );
    else
      this.filteredStations = this.stations;

    this.sortStations(this.sortType);
  }
}
