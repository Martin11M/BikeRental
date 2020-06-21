import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnBikeRentalComponent } from './return-bike-rental.component';

describe('ReturnBikeRentalComponent', () => {
  let component: ReturnBikeRentalComponent;
  let fixture: ComponentFixture<ReturnBikeRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnBikeRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnBikeRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
