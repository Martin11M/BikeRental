import { Injectable } from '@angular/core';
import {UserRentStatistics} from '../user-statistics/user-rent-statistics';
import {User} from '../manage-users-page/user';
import {Rental} from '../rental-history/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor() {

  }

  getUserRentals(user: User): Rental[] {
      // TODO - Get user rentals from server
      const yesterday: Date = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      yesterday.setSeconds(yesterday.getSeconds() + 20)

      const tempRentals: Rental[] = [
        {
          rentalId: '3',
          bikeName: 'Bike 1',
          rentalDate: yesterday,
          returnDate: new Date(),
          price: 200,
        },
        {
          rentalId: '4',
          bikeName: 'Bike 2',
          rentalDate: new Date(),
          returnDate: new Date(),
          price: 300,
        },
        {
          rentalId: '4',
          bikeName: 'Bike 3',
          rentalDate: new Date(),
          returnDate: null,
          price: 300,
        },
      ];

      return tempRentals;
  }

  getUserStatistics(user: User): UserRentStatistics {
    // TODO - Get user rentals from server
    const userRentStatistics = new UserRentStatistics();
    const rentals: Rental[] = this.getUserRentals(user);

    userRentStatistics.lastBike = null;
    userRentStatistics.rentedBikes = 0;
    userRentStatistics.totalMoney = 0;
    userRentStatistics.totalTime = 0;

    rentals.forEach(rental => {
      userRentStatistics.rentedBikes += 1;
      userRentStatistics.totalMoney += rental.price;

      if (rental.returnDate == null) {
        userRentStatistics.lastBike = rental.bikeName;
      } else {
        const timeDiff = Math.abs(rental.returnDate.getTime() - rental.rentalDate.getTime());
        userRentStatistics.totalTime += (timeDiff / (3600 * 1000));
      }
    });

    return userRentStatistics;
  }
}
