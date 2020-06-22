import {User} from '../manage-users-page/user';
import {Bike} from '../bikes-subtable/bike';

export class Rental {
  rentalId: string;
  user: User;
  bike: Bike;
  rentalDate: Date;
  returnDate: Date;
  price: number;
}
