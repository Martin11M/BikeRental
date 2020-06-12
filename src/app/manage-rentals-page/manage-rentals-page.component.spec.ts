import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRentalsPageComponent } from './manage-rentals-page.component';

describe('ManageRentalHistoryPageComponent', () => {
  let component: ManageRentalsPageComponent;
  let fixture: ComponentFixture<ManageRentalsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRentalsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRentalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
