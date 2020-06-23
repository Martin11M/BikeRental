import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Station } from '../manage-stations-page/station';
import { AvailableStationsService } from './rental-page.service';

@Component({
  selector: 'app-rent-page',
  templateUrl: './rent-page.component.html',
  styleUrls: ['./rent-page.component.scss']
})
export class RentPageComponent implements OnInit {
  sortType: string = '';
  sortReverse: boolean = true;
  filterForm: FormControl = new FormControl();

  stations: Station[];
  filteredStations: Station[];

  constructor(private availableStationsService: AvailableStationsService) { }

  ngOnInit() {
    this.availableStationsService.getStations().subscribe( stations => {
      this.stations = stations;
      this.filteredStations = this.stations;
    });
  }

  isRented() {
    return this.availableStationsService.isRented;
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
