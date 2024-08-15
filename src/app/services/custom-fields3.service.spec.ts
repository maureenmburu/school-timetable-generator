import { TestBed } from '@angular/core/testing';

import { CustomFields3Service } from './custom-fields3.service';

describe('CustomFields3Service', () => {
  let service: CustomFields3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomFields3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
