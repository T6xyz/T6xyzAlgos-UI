import { TestBed } from '@angular/core/testing';

import { DatastructuresService } from './datastructures.service';

describe('DatastructuresService', () => {
  let service: DatastructuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatastructuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
