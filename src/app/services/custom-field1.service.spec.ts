import { TestBed } from '@angular/core/testing';

import { CustomField1Service } from './custom-field1.service';

describe('CustomField1Service', () => {
  let service: CustomField1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomField1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
