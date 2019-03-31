import { TestBed } from '@angular/core/testing';

import { PaqueteServiceService } from './paquete-service.service';

describe('PaqueteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaqueteServiceService = TestBed.get(PaqueteServiceService);
    expect(service).toBeTruthy();
  });
});
