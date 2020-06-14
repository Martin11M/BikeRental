import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatisticsItemComponent } from './admin-statistics-item.component';

describe('AdminStatisticsItemComponent', () => {
  let component: AdminStatisticsItemComponent;
  let fixture: ComponentFixture<AdminStatisticsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStatisticsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatisticsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
