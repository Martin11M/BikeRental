import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatisticsItemComponent } from './user-statistics-item.component';

describe('UserStatisticsItemComponent', () => {
  let component: UserStatisticsItemComponent;
  let fixture: ComponentFixture<UserStatisticsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStatisticsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatisticsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
