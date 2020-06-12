import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBikesPageComponent } from './manage-bikes-page.component';

describe('ManageBikesPageComponent', () => {
  let component: ManageBikesPageComponent;
  let fixture: ComponentFixture<ManageBikesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBikesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBikesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
