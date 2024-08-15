import { TestBed } from '@angular/core/testing';

import { CustomField2Service } from './custom-field2.service';

describe('CustomField2Service', () => {
  let service: CustomField2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomField2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
