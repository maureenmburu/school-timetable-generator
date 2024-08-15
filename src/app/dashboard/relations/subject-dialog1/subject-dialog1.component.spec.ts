import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDialog1Component } from './subject-dialog1.component';

describe('SubjectDialog1Component', () => {
  let component: SubjectDialog1Component;
  let fixture: ComponentFixture<SubjectDialog1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectDialog1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectDialog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
