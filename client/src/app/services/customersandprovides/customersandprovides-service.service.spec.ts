import { TestBed } from '@angular/core/testing';

import { customersandprovidesServiceService } from '../customersandprovides/customersandprovides-service.service';

describe('PaqueteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: customersandprovidesServiceService = TestBed.get(customersandprovidesServiceService);
    expect(service).toBeTruthy();
  });
});