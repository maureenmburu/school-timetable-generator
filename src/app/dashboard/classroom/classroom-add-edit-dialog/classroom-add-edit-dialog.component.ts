import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Classroom } from '../../../models/classroom.model';
import { ClassroomService } from '../../../services/classroom.service';

@Component({
  selector: 'app-classroom-add-edit-dialog',
  templateUrl: './classroom-add-edit-dialog.component.html',
  styleUrl: './classroom-add-edit-dialog.component.css'
})
export class ClassroomAddEditDialogComponent implements OnChanges {
  @Input() showDialog: boolean = false;
  @Input() data: Classroom | null = null;
  @Output() refreshClasses = new EventEmitter<void>();
  @Output() closeDialog = new EventEmitter<void>();

  classForm: FormGroup;
  showCustomFieldsDialog: boolean = false;
  customFields: { name: string, value: string }[] = [];
  isLoading: boolean = false; // Loading state
  error: string = ''; // Error state

  constructor(private fb: FormBuilder, private classroomService: ClassroomService) { // Inject ClassroomService
    this.classForm = this.fb.group({
      name: ['', Validators.required],
      short: ['', Validators.required],
      count: [0, Validators.required],
      timeOff: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  ngOnChanges(): void {
    if (this.data) {
      this.classForm.patchValue(this.data);
    } else {
      this.classForm.reset();
    }
  }

  onSave(): void {
    if (this.classForm.valid) {
      this.isLoading = true; // Start loading
      this.error = ''; // Reset error message

      const classroom = this.classForm.value;
      if (this.data && this.data.id) {
        // Update existing classroom
        this.classroomService.updateClassroom({ ...classroom, id: this.data.id }).subscribe(
          () => {
            this.refreshClasses.emit();
            this.closeDialog.emit();
            this.isLoading = false; // Stop loading
          },
          error => {
            this.error = error.message || 'Failed to update classroom.'; // Set error message
            this.isLoading = false; // Stop loading
          }
        );
      } else {
        // Add new classroom
        this.classroomService.addClassroom(classroom).subscribe(
          () => {
            this.refreshClasses.emit();
            this.closeDialog.emit();
            this.isLoading = false; // Stop loading
          },
          error => {
            this.error = error.message || 'Failed to add classroom.'; // Set error message
            this.isLoading = false; // Stop loading
          }
        );
      }
    }
  }

  onCancel(): void {
    this.closeDialog.emit();
  }

  openCustomFields(): void {
    this.showCustomFieldsDialog = true;
  }

  closeCustomFieldsDialog(): void {
    this.showCustomFieldsDialog = false;
  }
}
