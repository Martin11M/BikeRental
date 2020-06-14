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

  @Input() stationId: string;
  bikes: Bike[];
  filteredBikes: Bike[];

  constructor(private bikesSubtableService: BikesSubtableService) { }

  ngOnInit() {
    this.bikes = this.bikesSubtableService.getBikes(this.stationId);
    this.filteredBikes = this.bikes;
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
        case 'name': {
          this.filteredBikes.sort( (a,b) =>
            (a.name > b.name) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
          break;
        }
      }
  }

  filterBikes(query: string) {
    if(query)
      this.filteredBikes = this.bikes.filter( (elem, ind, arr) =>
          (elem.bikeId.toString().includes(query) || elem.name.includes(query)) );
    else
      this.filteredBikes = this.bikes;

    this.sortBikes(this.sortType);
  }
}
