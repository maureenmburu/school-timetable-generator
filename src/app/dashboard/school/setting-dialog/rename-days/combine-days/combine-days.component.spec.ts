import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineDaysComponent } from './combine-days.component';

describe('CombineDaysComponent', () => {
  let component: CombineDaysComponent;
  let fixture: ComponentFixture<CombineDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CombineDaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
