import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesAddEditDialogComponent } from './activities-add-edit-dialog.component';

describe('ActivitiesAddEditDialogComponent', () => {
  let component: ActivitiesAddEditDialogComponent;
  let fixture: ComponentFixture<ActivitiesAddEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivitiesAddEditDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesAddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
