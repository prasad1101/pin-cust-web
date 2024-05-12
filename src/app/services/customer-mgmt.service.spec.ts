import { TestBed } from '@angular/core/testing';

import { CustomerMgmtService } from './customer-mgmt.service';

describe('CustomerMgmtService', () => {
  let service: CustomerMgmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerMgmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
