import { TestBed } from '@angular/core/testing';

import { PadavansService } from './padavans.service';

describe('PadavansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PadavansService = TestBed.get(PadavansService);
    expect(service).toBeTruthy();
  });
});
