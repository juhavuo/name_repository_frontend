import { TestBed } from '@angular/core/testing';

import { ConnectorserviceService } from './connectorservice.service';

describe('ConnectorserviceService', () => {
  let service: ConnectorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
