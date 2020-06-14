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

  sortType = '';
  sortReverse = true;
  rentals: Rental[];
  filteredRentals: Rental[];
  filterForm: FormControl = new FormControl();

  @Input() userId: string;
  constructor(private rentalService: RentalService, private datePipe: DatePipe, private currencyPipe: CurrencyPipe) {
    this.rentals = this.rentalService.getUserRentals(this.userId);
    this.filteredRentals = this.rentals;
  }

  ngOnInit() {
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
          (a.userId > b.userId) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
        break;
      }
      case 'bikeName': {
        this.filteredRentals.sort( (a, b) =>
          (a.bikeName > b.bikeName) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
        break;
      }
      case 'rentalDate': {
        this.filteredRentals.sort( (a, b) =>
          (a.rentalDate > b.rentalDate) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
        break;
      }
      case 'returnDate': {
        this.filteredRentals.sort( (a, b) =>
          (a.returnDate > b.returnDate) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
        break;
      }
      case 'price': {
        this.filteredRentals.sort( (a, b) =>
          (a.price > b.price) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
        break;
      }
    }
  }

  filterRentals(query: string) {
    if (query) {
      this.filteredRentals = this.rentals.filter( (elem, ind, arr) => {
        const price = this.currencyPipe.transform(elem.price);
        const rentalDate = this.datePipe.transform(elem.rentalDate, 'medium');
        let returnDate = '';

        if (elem.returnDate != null) {
          returnDate = this.datePipe.transform(elem.returnDate, 'medium');
        }

        return elem.rentalId.includes(query) || elem.userId.includes(query) || elem.bikeName.includes(query)
          || rentalDate.includes(query) || returnDate.includes(query) || price.includes(query);
      });
    } else {
      this.filteredRentals = this.rentals;
    }

    this.sortRentals(this.sortType);
  }

}
