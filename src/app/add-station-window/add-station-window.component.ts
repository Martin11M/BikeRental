import { Component, OnInit } from '@angular/core';
import { BikesSubtableService } from '../bikes-subtable/bikes-subtable.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageStationsService } from '../manage-stations-page/manage-stations.service';

@Component({
  selector: 'app-add-station-window',
  templateUrl: './add-station-window.component.html',
  styleUrls: ['./add-station-window.component.scss']
})
export class AddStationWindowComponent implements OnInit {

  addStationForm: FormGroup;
  constructor(private manageStationsService: ManageStationsService, private router: Router) { }

  ngOnInit() {
    this.addStationForm = this.manageStationsService.getAddStationForm();
  }

  addStation() {
    this.manageStationsService.addStation(
      this.addStationForm.get('address').value,
      this.addStationForm.get('lat').value,
      this.addStationForm.get('lng').value).subscribe( result => {
        if(result.code === 1)
          this.back();
        else
          alert(result.text);
      });
  }

  back() {
    this.router.navigate(['/manage-stations-page']);
  }
}
