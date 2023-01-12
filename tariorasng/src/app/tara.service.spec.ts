import { TestBed } from '@angular/core/testing';

import { TaraService } from './tara.service';

describe('TaraService', () => {
  let service: TaraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
