import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomAddEditDialogComponent } from './classroom-add-edit-dialog.component';

describe('ClassroomAddEditDialogComponent', () => {
  let component: ClassroomAddEditDialogComponent;
  let fixture: ComponentFixture<ClassroomAddEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassroomAddEditDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassroomAddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
