import { TestBed, inject } from '@angular/core/testing';

import { DrawingsByTagFilterService } from './drawings-by-tag-filter.service';

describe('DrawingsByTagFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawingsByTagFilterService]
    });
  });

  it('should be created', inject([DrawingsByTagFilterService], (service: DrawingsByTagFilterService) => {
    expect(service).toBeTruthy();
  }));
});
