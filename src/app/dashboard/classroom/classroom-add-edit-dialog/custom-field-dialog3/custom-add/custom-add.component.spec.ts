import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAddComponent } from './custom-add.component';

describe('CustomAddComponent', () => {
  let component: CustomAddComponent;
  let fixture: ComponentFixture<CustomAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
