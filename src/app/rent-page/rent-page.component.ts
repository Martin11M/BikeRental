import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Station } from '../manage-stations-page/station';
import {Rental} from '../rental-history/rental';
import {RentalService} from '../services/rental.service';
import {ManageStationsService} from "../manage-stations-page/manage-stations.service";

@Component({
  selector: 'app-rent-page',
  templateUrl: './rent-page.component.html',
  styleUrls: ['./rent-page.component.scss']
})
export class RentPageComponent implements OnInit {
  sortType = '';
  sortReverse = true;
  filterForm: FormControl = new FormControl();

  totalRecords: number;
  page: number;

  stations: Station[];
  filteredStations: Station[];

  rentedStation = {
    id: 0,
    address: ''
  };

  rented: Rental;
  isRented = false;

  stationAvailableBikesCount = {};

  constructor(private manageStationsService: ManageStationsService, private rentalService: RentalService) {
    this.totalRecords = 0;
    this.page = 1;

    this.rentalService.getUserRentals(false).subscribe(rentals => {
      const rentedRentals = rentals.filter(rental => rental.returnDate === null);
      if (rentedRentals.length > 0) {
        this.setRentedBike(rentedRentals[0]);
      } else {
        this.isRented = false;
      }
    });

    this.manageStationsService.getStations().subscribe(stations => {
      this.stations = stations;
      stations.forEach(station => {
        this.manageStationsService.getAvailableBikesCountForStation(station).subscribe(availableBikesCount =>
          this.stationAvailableBikesCount[station.stationId] = availableBikesCount
        );
      });
    });
   }

  ngOnInit() {
    this.manageStationsService.getStations().subscribe( stations => {
      this.stations = stations;
      this.filteredStations = this.stations;
      this.totalRecords = this.filteredStations.length;
    });
  }

  setRentedBike(rentedBike: Rental) {
    this.rented = rentedBike;
    this.isRented = true;

    const station = rentedBike.bike.station;
    this.rentedStation = {
      id: station.stationId,
      address: station.address
    };
  }

  rentMade(rentInfo) {
    const station = rentInfo as Station;

    this.rentedStation = {
      id: station.stationId,
      address: station.address
    };

    this.stationAvailableBikesCount[station.stationId] -= 1;
    this.isRented = true;
  }

  returnMade(rentInfo) {
    const station = rentInfo as Station;
    this.rentedStation = {
      id: 0,
      address: ''
    };

    this.stationAvailableBikesCount[station.stationId] += 1;
    this.isRented = false;
  }

  sortStations(sortProperty: string) {
    if (sortProperty === '') {
    return;
    }

    switch (sortProperty) {
      case 'stationId': {
        this.filteredStations.sort( (a, b) =>
          (a.stationId > b.stationId) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
        break;
      }
      case 'address': {
        this.filteredStations.sort( (a, b) =>
          (a.address > b.address) ? (this.sortReverse ? -1 : 1) : (this.sortReverse ? 1 : -1) );
        break;
      }
    }
  }

  filterStations(query: string) {
    if (query) {
      this.filteredStations = this.stations.filter( (elem, ind, arr) =>
          (elem.stationId.toString().includes(query) || elem.address.includes(query)) );
    } else {
      this.filteredStations = this.stations;
      this.totalRecords = this.filteredStations.length;
    }

    this.page = 1;
    this.sortStations(this.sortType);
  }
}
