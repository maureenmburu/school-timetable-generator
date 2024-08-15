import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetClassroomsDialogComponent } from './set-classrooms-dialog.component';

describe('SetClassroomsDialogComponent', () => {
  let component: SetClassroomsDialogComponent;
  let fixture: ComponentFixture<SetClassroomsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetClassroomsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetClassroomsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
