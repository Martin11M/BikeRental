import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBikeWindowComponent } from './add-bike-window.component';

describe('AddBikeWindowComponent', () => {
  let component: AddBikeWindowComponent;
  let fixture: ComponentFixture<AddBikeWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBikeWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBikeWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
