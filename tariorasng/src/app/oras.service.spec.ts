import { TestBed } from '@angular/core/testing';

import { OrasService } from './oras.service';

describe('OrasService', () => {
  let service: OrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
