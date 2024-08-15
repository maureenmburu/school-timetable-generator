import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDialog2Component } from './add-dialog2.component';

describe('AddDialog2Component', () => {
  let component: AddDialog2Component;
  let fixture: ComponentFixture<AddDialog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDialog2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDialog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
