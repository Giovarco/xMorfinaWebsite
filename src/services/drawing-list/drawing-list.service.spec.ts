import { TestBed, inject } from '@angular/core/testing';

import { DrawingListService } from './drawing-list.service';

describe('DrawingListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawingListService]
    });
  });

  it('should be created', inject([DrawingListService], (service: DrawingListService) => {
    expect(service).toBeTruthy();
  }));
});
