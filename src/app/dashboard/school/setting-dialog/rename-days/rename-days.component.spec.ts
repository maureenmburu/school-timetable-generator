import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameDaysComponent } from './rename-days.component';

describe('RenameDaysComponent', () => {
  let component: RenameDaysComponent;
  let fixture: ComponentFixture<RenameDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenameDaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenameDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
