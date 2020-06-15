import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationAvailableItemComponent } from './station-available-item.component';

describe('StationAvailableItemComponent', () => {
  let component: StationAvailableItemComponent;
  let fixture: ComponentFixture<StationAvailableItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationAvailableItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationAvailableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
