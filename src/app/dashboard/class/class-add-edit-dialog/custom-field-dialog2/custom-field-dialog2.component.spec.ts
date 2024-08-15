import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldDialog2Component } from './custom-field-dialog2.component';

describe('CustomFieldDialog2Component', () => {
  let component: CustomFieldDialog2Component;
  let fixture: ComponentFixture<CustomFieldDialog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomFieldDialog2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFieldDialog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
