import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddEditDialogComponent } from './teacher-add-edit-dialog.component';

describe('TeacherAddEditDialogComponent', () => {
  let component: TeacherAddEditDialogComponent;
  let fixture: ComponentFixture<TeacherAddEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherAddEditDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherAddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
