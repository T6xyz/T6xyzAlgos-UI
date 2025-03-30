import { TestBed } from '@angular/core/testing';

import { DplecturesService } from './dplectures.service';

describe('DplecturesService', () => {
  let service: DplecturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DplecturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
