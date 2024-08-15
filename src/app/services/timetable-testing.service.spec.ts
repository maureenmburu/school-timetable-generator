import { TestBed } from '@angular/core/testing';

import { TimetableTestingService } from './timetable-testing.service';

describe('TimetableTestingService', () => {
  let service: TimetableTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimetableTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
