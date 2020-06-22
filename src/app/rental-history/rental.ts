import {User} from '../manage-users-page/user';
import {Bike} from '../bikes-subtable/bike';

export class Rental {
  rentalId: number;
  user: User;
  bike: Bike;
  rentalDate: Date;
  returnDate: Date;
  price: number;
}
