import { TestBed } from '@angular/core/testing';

import { PulpaService } from './pulpa.service';

describe('PulpaService', () => {
  let service: PulpaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PulpaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
