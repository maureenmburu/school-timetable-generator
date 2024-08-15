import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableTestingComponent } from './timetable-testing.component';

describe('TimetableTestingComponent', () => {
  let component: TimetableTestingComponent;
  let fixture: ComponentFixture<TimetableTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimetableTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimetableTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
