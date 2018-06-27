import { TestBed, inject } from '@angular/core/testing';

import { CollaboratorListService } from './collaborator-list.service';

describe('CollaboratorListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollaboratorListService]
    });
  });

  it('should be created', inject([CollaboratorListService], (service: CollaboratorListService) => {
    expect(service).toBeTruthy();
  }));
});
