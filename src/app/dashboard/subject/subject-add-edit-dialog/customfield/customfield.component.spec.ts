import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomfieldComponent } from './customfield.component';

describe('CustomfieldComponent', () => {
  let component: CustomfieldComponent;
  let fixture: ComponentFixture<CustomfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomfieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
