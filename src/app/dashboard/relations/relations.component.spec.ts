import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationsComponent } from './relations.component';

describe('RelationsComponent', () => {
  let component: RelationsComponent;
  let fixture: ComponentFixture<RelationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
