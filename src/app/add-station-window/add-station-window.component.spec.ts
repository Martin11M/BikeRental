import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStationWindowComponent } from './add-station-window.component';

describe('AddStationWindowComponent', () => {
  let component: AddStationWindowComponent;
  let fixture: ComponentFixture<AddStationWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStationWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStationWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
