import { TestBed } from '@angular/core/testing';

import { DataAnonimoService } from './data-anonimo.service';

describe('DataAnonimoService', () => {
  let service: DataAnonimoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAnonimoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
