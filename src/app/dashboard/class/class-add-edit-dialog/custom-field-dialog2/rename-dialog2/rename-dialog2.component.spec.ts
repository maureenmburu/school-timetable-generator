import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameDialog2Component } from './rename-dialog2.component';

describe('RenameDialog2Component', () => {
  let component: RenameDialog2Component;
  let fixture: ComponentFixture<RenameDialog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenameDialog2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenameDialog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
