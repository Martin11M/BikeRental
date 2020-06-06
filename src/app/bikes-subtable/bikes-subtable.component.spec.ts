import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesSubtableComponent } from './bikes-subtable.component';

describe('BikesSubtableComponent', () => {
  let component: BikesSubtableComponent;
  let fixture: ComponentFixture<BikesSubtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikesSubtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesSubtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
