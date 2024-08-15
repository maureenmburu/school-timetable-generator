import { TestBed } from '@angular/core/testing';

import { CustomFields4Service } from './custom-fields4.service';

describe('CustomFields4Service', () => {
  let service: CustomFields4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomFields4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
