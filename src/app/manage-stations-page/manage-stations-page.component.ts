import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ManageStationsService } from './manage-stations.service';
import { Station } from './station';
import { Router } from '@angular/router';

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

  constructor(private manageStationsService: ManageStationsService, private router: Router) { }

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
        case 'lat': {
          this.filteredStations.sort( (a,b) =>
            (a.lat > b.lat) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
          break;
        }
        case 'lng': {
          this.filteredStations.sort( (a,b) =>
            (a.lng > b.lng) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
          break;
        }
      }
  }

  filterStations(query: string) {
    if(query === null)
      query = "";
    else
      query = query.toLowerCase();

    if(query)
      this.filteredStations = this.stations.filter( (elem, ind, arr) =>
          (elem.stationId.toString().includes(query) || elem.address.includes(query)) 
          || elem.lat.toString().includes(query) || elem.lng.toString().includes(query));
    else
      this.filteredStations = this.stations;

    this.sortStations(this.sortType);
  }

  addStation() {
    this.router.navigate(['/add-station-window']);
  }
}
