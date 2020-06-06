import { TestBed } from '@angular/core/testing';

import { ManageStationsService } from './manage-stations-page.service';

describe('ManageStationsPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageStationsService = TestBed.get(ManageStationsService);
    expect(service).toBeTruthy();
  });
});
