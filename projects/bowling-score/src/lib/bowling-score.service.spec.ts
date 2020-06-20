import { TestBed } from '@angular/core/testing';

import { BowlingScoreService } from './bowling-score.service';

describe('BowlingScoreService', () => {
  let service: BowlingScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BowlingScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
