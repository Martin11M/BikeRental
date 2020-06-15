import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavigateComponent } from './admin-navigate.component';

describe('AdminNavigateComponent', () => {
  let component: AdminNavigateComponent;
  let fixture: ComponentFixture<AdminNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
