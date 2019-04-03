import { TestBed } from '@angular/core/testing';

import { PacketandeventServiceService } from '../packetandevent/packetandevent-service.service';

describe('PaqueteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PacketandeventServiceService = TestBed.get(PacketandeventServiceService);
    expect(service).toBeTruthy();
  });
});