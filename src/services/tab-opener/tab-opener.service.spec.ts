import { TestBed, inject } from '@angular/core/testing';

import { TabOpenerService } from './tab-opener.service';

describe('TabOpenerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabOpenerService]
    });
  });

  it('should be created', inject([TabOpenerService], (service: TabOpenerService) => {
    expect(service).toBeTruthy();
  }));
});
