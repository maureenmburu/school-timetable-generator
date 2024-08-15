import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDialog1Component } from './class-dialog1.component';

describe('ClassDialog1Component', () => {
  let component: ClassDialog1Component;
  let fixture: ComponentFixture<ClassDialog1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassDialog1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassDialog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
