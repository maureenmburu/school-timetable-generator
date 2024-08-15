import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Activity } from '../../../models/activity.model';
import { ActivitiesService } from '../../../services/activities.service';

@Component({
  selector: 'app-activities-add-edit-dialog',
  templateUrl: './activities-add-edit-dialog.component.html',
  styleUrl: './activities-add-edit-dialog.component.css'
})
export class ActivitiesAddEditDialogComponent implements OnInit{
  @Input() showDialog: boolean = false;
  @Input() data: Activity | null = null; // Use data for edit functionality
  @Output() refreshActivities = new EventEmitter<void>();
  @Output() closeDialog = new EventEmitter<void>();
  activityForm!: FormGroup;

  constructor(private fb: FormBuilder, private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.activityForm) {
      this.activityForm.patchValue({
        name: this.data?.name || '',
        date: this.data?.date || '',
        description: this.data?.description || ''
      });
    }
  }

  initForm(): void {
    this.activityForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required]
    });

    if (this.data) {
      this.activityForm.patchValue({
        name: this.data.name,
        date: this.data.date,
        description: this.data.description
      });
    }
  }

  onSave(): void {
    if (this.activityForm.valid) {
      const activity = new Activity(
        this.data?.id || 0,
        this.activityForm.get('name')?.value,
        this.activityForm.get('date')?.value,
        this.activityForm.get('description')?.value
      );

      if (this.data?.id) {
        this.activitiesService.updateActivity(activity).subscribe(() => {
          this.refreshActivities.emit();
          this.closeDialog.emit();
        });
      } else {
        this.activitiesService.addActivity(activity).subscribe(() => {
          this.refreshActivities.emit();
          this.closeDialog.emit();
        });
      }
    }
  }

  onCancel(): void {
    this.closeDialog.emit();
  }

}
