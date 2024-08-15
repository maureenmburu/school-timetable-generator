import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTeacherComponent } from './change-teacher.component';

describe('ChangeTeacherComponent', () => {
  let component: ChangeTeacherComponent;
  let fixture: ComponentFixture<ChangeTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
