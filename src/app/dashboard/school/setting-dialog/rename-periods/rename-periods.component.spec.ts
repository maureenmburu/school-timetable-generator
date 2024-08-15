import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenamePeriodsComponent } from './rename-periods.component';

describe('RenamePeriodsComponent', () => {
  let component: RenamePeriodsComponent;
  let fixture: ComponentFixture<RenamePeriodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenamePeriodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenamePeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
