import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDaysComponent } from './delete-days.component';

describe('DeleteDaysComponent', () => {
  let component: DeleteDaysComponent;
  let fixture: ComponentFixture<DeleteDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteDaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
