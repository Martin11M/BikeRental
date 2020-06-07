import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalHistoryItemComponent } from './rental-history-item.component';

describe('RentHistoryItemComponent', () => {
  let component: RentalHistoryItemComponent;
  let fixture: ComponentFixture<RentalHistoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalHistoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
