import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldDialog4Component } from './custom-field-dialog4.component';

describe('CustomFieldDialog4Component', () => {
  let component: CustomFieldDialog4Component;
  let fixture: ComponentFixture<CustomFieldDialog4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomFieldDialog4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFieldDialog4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
