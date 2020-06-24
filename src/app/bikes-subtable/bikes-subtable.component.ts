import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BikesSubtableService } from './bikes-subtable.service';
import { Bike } from './bike';

@Component({
  selector: 'app-bikes-subtable',
  templateUrl: './bikes-subtable.component.html',
  styleUrls: ['./bikes-subtable.component.scss']
})
export class BikesSubtableComponent implements OnInit {

  sortType: string = '';
  sortReverse: boolean = true;
  filterForm: FormControl = new FormControl();

  paginationId: string;
  totalRecords: Number;
  page: Number;

  @Input() stationId: number = null;
  @Input() includeRemoved: boolean = false;
  bikes: Bike[];
  filteredBikes: Bike[];

  constructor(private bikesSubtableService: BikesSubtableService) {
    this.totalRecords = 0;
    this.page = 1;

    this.bikesSubtableService.removeBikeFromTableSubject.subscribe(
      id => { this.removeBikeFromTable(id); }
    );
  }

  ngOnInit() {
    this.paginationId = "bikesPagination" + (this.stationId === null ? 'Null' : this.stationId.toString());

    if(this.stationId === null)
      this.bikesSubtableService.getAllBikes().subscribe( bikes => {
        this.bikes = bikes;
        this.refillFilteredBikes();
      });
    else
      this.bikesSubtableService.getBikesByStationId(this.stationId).subscribe( bikes => {
        this.bikes = bikes.filter(bike => bike.status === "FREE");
        this.refillFilteredBikes();
      });
  }

  checkboxChanged() {
    this.refillFilteredBikes();
    this.filterBikes(this.filterForm.value);
  }

  sortBikes(sortProperty: string) {
    if(sortProperty === '')
      return;

      switch(sortProperty) {
        case 'bikeId': {
          this.filteredBikes.sort( (a,b) =>
            (a.bikeId > b.bikeId) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
          break;
        }
        case 'stationId': {
          this.filteredBikes.sort((a, b) => {
            if(!a.station) return this.sortReverse ? 1 : -1;
            if(!b.station) return this.sortReverse ? -1 : 1;
            if (this.sortReverse) return a.station.stationId > b.station.stationId ? 1 : -1;
            return a.station.stationId > b.station.stationId ? -1 : 1;
          });
          break;
        }
        case 'name': {
          this.filteredBikes.sort( (a,b) =>
            (a.name > b.name) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
          break;
        }
        case 'status': {
          this.filteredBikes.sort( (a,b) =>
            (a.status > b.status) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
          break;
        }
      }
  }

  filterBikes(query: string) {
    if(query === null)
      query = "";
    else
      query = query.toLowerCase();

    if(query)
      this.filteredBikes = this.bikes.filter( (elem, ind, arr) =>
          (this.includeRemoved ? true : elem.status !== "REMOVED") &&
          (   elem.bikeId.toString().includes(query) || elem.name.toLowerCase().includes(query) || elem.status.toLowerCase().includes(query)
          || (elem.station === null && query === "-")
          || (elem.station !== null && elem.station.stationId.toString().includes(query))) );
    else
      this.refillFilteredBikes();

    this.sortBikes(this.sortType);
    this.page = 1;
  }

  refillFilteredBikes() {
    if(this.includeRemoved)
      this.filteredBikes = this.bikes;
    else
      this.filteredBikes = this.bikes.filter(elem => elem.status !== "REMOVED");

    this.totalRecords = this.filterBikes.length;
  }

  removeBikeFromTable(bikeId: number) {
    // mark the bike with given id as removed
    this.bikes.find( bike => {
      if(bike.bikeId === bikeId) {
        bike.status = "REMOVED";
        return true;
      }
      return false;
    });

    // if not including removed bikes, the amount of bikes in the table
    // has decreased and the table must be refreshed completely
    if(!this.includeRemoved) {
      this.refillFilteredBikes();
      this.filterBikes(this.filterForm.value)
    }
    // if including removed bikes the amount and position of bikes in
    // the table has not changed and it is enough to just change the status
    else {
      this.filteredBikes.find( bike => {
        if(bike.bikeId === bikeId) {
          bike.status = "REMOVED";
          return true;
        }
        return false;
      });
    }
  }
}
