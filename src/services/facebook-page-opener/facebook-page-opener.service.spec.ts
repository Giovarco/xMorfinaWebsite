import { TestBed, inject } from '@angular/core/testing';

import { FacebookPageOpenerService } from './facebook-page-opener.service';

describe('FacebookPageOpenerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacebookPageOpenerService]
    });
  });

  it('should be created', inject([FacebookPageOpenerService], (service: FacebookPageOpenerService) => {
    expect(service).toBeTruthy();
  }));
});
