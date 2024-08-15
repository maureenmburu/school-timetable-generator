import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAddEditDialogComponent } from './class-add-edit-dialog.component';

describe('ClassAddEditDialogComponent', () => {
  let component: ClassAddEditDialogComponent;
  let fixture: ComponentFixture<ClassAddEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassAddEditDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassAddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
