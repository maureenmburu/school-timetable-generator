import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldDialog3Component } from './custom-field-dialog3.component';

describe('CustomFieldDialog3Component', () => {
  let component: CustomFieldDialog3Component;
  let fixture: ComponentFixture<CustomFieldDialog3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomFieldDialog3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFieldDialog3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
