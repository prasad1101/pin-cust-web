import { TestBed } from '@angular/core/testing';

import { PinMgmtService } from './pin-mgmt.service';

describe('PinMgmtService', () => {
  let service: PinMgmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinMgmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
