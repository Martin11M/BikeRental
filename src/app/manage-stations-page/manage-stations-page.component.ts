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

  totalRecords: Number;
  page: Number;

  stations: Station[];
  filteredStations: Station[];

  constructor(private manageStationsService: ManageStationsService, private router: Router) {
    this.totalRecords = 0;
    this.page = 1;

    this.manageStationsService.removeStationFromTableSubject.subscribe(
      id => { this.removeStationFromTable(id); }
    );
   }

  ngOnInit() {
    this.manageStationsService.getStations().subscribe( stations => {
      this.stations = stations;
      this.refillFilteredStations();
    });
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
      this.refillFilteredStations();

    this.page = 1;
    this.sortStations(this.sortType);
  }

  addStation() {
    this.router.navigate(['/add-station-window']);
  }

  refillFilteredStations() {
    this.filteredStations = this.stations;

    this.totalRecords = this.filteredStations.length;
  }

  removeStationFromTable(stationId: number) {
    this.stations = this.stations.filter(elem => elem.stationId !== stationId);
    this.refillFilteredStations();
    this.filterStations(this.filterForm.value);
  }
}
