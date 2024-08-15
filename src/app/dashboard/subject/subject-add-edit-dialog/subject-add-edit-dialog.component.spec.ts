import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAddEditDialogComponent } from './subject-add-edit-dialog.component';

describe('SubjectAddEditDialogComponent', () => {
  let component: SubjectAddEditDialogComponent;
  let fixture: ComponentFixture<SubjectAddEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectAddEditDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectAddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
