import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeClassroomComponent } from './change-classroom.component';

describe('ChangeClassroomComponent', () => {
  let component: ChangeClassroomComponent;
  let fixture: ComponentFixture<ChangeClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeClassroomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
