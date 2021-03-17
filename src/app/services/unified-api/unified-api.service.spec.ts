import { TestBed } from '@angular/core/testing';

import { UnifiedApiService } from './unified-api.service';

describe('UnifiedApiService', () => {
  let service: UnifiedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnifiedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
