import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStationsPageComponent } from './manage-stations-page.component';

describe('ManageStationsPageComponent', () => {
  let component: ManageStationsPageComponent;
  let fixture: ComponentFixture<ManageStationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStationsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
