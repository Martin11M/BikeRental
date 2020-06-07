import {Component, Input, OnInit} from '@angular/core';
import {Rental} from '../rental-history/rental';

@Component({
  selector: 'app-rental-history-item',
  templateUrl: './rental-history-item.component.html',
  styleUrls: ['./rental-history-item.component.scss']
})
export class RentalHistoryItemComponent implements OnInit {

  @Input() rental: Rental;

  constructor() { }

  ngOnInit() {
  }

}
