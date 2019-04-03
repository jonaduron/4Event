import { TestBed } from '@angular/core/testing';

import { PacketsdetailsServiceService } from '../packetsdetails/packetsdetails-service.service';

describe('PaqueteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PacketsdetailsServiceService = TestBed.get(PacketsdetailsServiceService);
    expect(service).toBeTruthy();
  });
});