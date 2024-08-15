import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcustomComponent } from './addcustom.component';

describe('AddcustomComponent', () => {
  let component: AddcustomComponent;
  let fixture: ComponentFixture<AddcustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddcustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
