import { Component, OnInit } from '@angular/core';
import { BikesSubtableService } from '../bikes-subtable/bikes-subtable.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bike-window',
  templateUrl: './add-bike-window.component.html',
  styleUrls: ['./add-bike-window.component.scss']
})
export class AddBikeWindowComponent implements OnInit {

  addBikeForm: FormGroup;
  constructor(private bikesSubtableService: BikesSubtableService, private router: Router) { }

  ngOnInit() {
    this.addBikeForm = this.bikesSubtableService.getAddBikeForm();
  }

  addBike() {
    this.bikesSubtableService.addBike(this.addBikeForm.get('station').value, this.addBikeForm.get('bikeName').value)
      .subscribe(
        bike => { this.back(); },
        err => { alert(`Cound not add bike: HTTP Status ${err.status}`) }
      );
  }

  back() {
    this.router.navigate(['/manage-bikes-page']);
  }
  
}
