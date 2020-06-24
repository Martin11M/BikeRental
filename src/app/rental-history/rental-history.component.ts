import {Component, Input, OnInit} from '@angular/core';
import {Rental} from './rental';
import {RentalService} from '../services/rental.service';
import {User} from '../manage-users-page/user';
import {FormControl} from '@angular/forms';
import {CurrencyPipe, DatePipe} from '@angular/common';


@Component({
  selector: 'app-rental-history',
  templateUrl: './rental-history.component.html',
  styleUrls: ['./rental-history.component.scss']
})
export class RentalHistoryComponent implements OnInit {

  totalRecords: Number;
  page: Number;

  sortType = '';
  sortReverse = true;
  rentals: Rental[];
  filteredRentals: Rental[];
  filterForm: FormControl = new FormControl();

  @Input() allRentals = false;
  constructor(private rentalService: RentalService, private datePipe: DatePipe, private currencyPipe: CurrencyPipe) {
    this.totalRecords = 0;
    this.page = 1;
  }

  ngOnInit() {
    this.rentalService.getUserRentals(this.allRentals).subscribe(rentals => {
      this.rentals = rentals;
      this.filteredRentals = this.rentals;
      this.totalRecords = this.filterRentals.length;
    });
  }

  sortRentals(sortProperty: string) {
    if (sortProperty === '') {
      return;
    }

    switch (sortProperty) {
      case 'rentalId': {
        this.filteredRentals.sort( (a, b) =>
          (a.rentalId > b.rentalId) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
        break;
      }
      case 'userId': {
        this.filteredRentals.sort( (a, b) =>
          (a.user.userId > b.user.userId) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
        break;
      }
      case 'bikeName': {
        this.filteredRentals.sort( (a, b) =>
          (a.bike.name > b.bike.name) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
        break;
      }
      case 'rentalDate': {
        this.filteredRentals.sort( (a, b) =>
          (a.rentalDate > b.rentalDate) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
        break;
      }
      case 'returnDate': {
        this.filteredRentals.sort( (a, b) => {
          if(!a.returnDate) return this.sortReverse ? 1 : -1;
          if(!b.returnDate) return this.sortReverse ? -1 : 1;
          if (this.sortReverse) return a.returnDate > b.returnDate ? 1 : -1;
          return a.returnDate > b.returnDate ? -1 : 1;
        });    
        break;
      }
      case 'price': {
        this.filteredRentals.sort( (a, b) => {
          if(a.price === null) return this.sortReverse ? 1 : -1;
          if(b.price === null) return this.sortReverse ? -1 : 1;
          if (this.sortReverse) return a.price > b.price ? 1 : -1;
          return a.price > b.price ? -1 : 1;
        });
        break;
      }
    }
  }

  filterRentals(query: string) {
    if (query) {
      this.filteredRentals = this.rentals.filter( (elem, ind, arr) => {
        const price = this.currencyPipe.transform(elem.price  == null ? 0 : elem.price);
        const rentalDate = this.datePipe.transform(elem.rentalDate, 'medium');
        let returnDate = '';

        if (elem.returnDate != null) {
          returnDate = this.datePipe.transform(elem.returnDate, 'medium');
        }

        return elem.rentalId.toString().includes(query) || elem.user.userId.toString().includes(query)
          || elem.bike.name.includes(query) || rentalDate.includes(query)
          || returnDate.includes(query) || price.includes(query);
      });
    } else {
      this.filteredRentals = this.rentals;
      this.totalRecords = this.filterRentals.length;
    }

    this.page = 1;
    this.sortRentals(this.sortType);
  }

}
