import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Class } from '../../../models/class.model';
import { ClassService } from '../../../services/class.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-class-add-edit-dialog',
  templateUrl: './class-add-edit-dialog.component.html',
  styleUrl: './class-add-edit-dialog.component.css'
})
export class ClassAddEditDialogComponent implements OnChanges {
  @Input() showDialog: boolean = false;
  @Input() data: Class | null = null; // For edit purposes
  @Output() refreshClasses = new EventEmitter<void>();
  @Output() closeDialog = new EventEmitter<void>();

  classForm: FormGroup;
  grades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'];

  // Properties for custom fields dialog
  showCustomFieldsDialog2: boolean = false;
  customFields: { name: string, value: string }[] = [];
  newFieldName: string = '';
  newFieldValue: string = '';

  // Property to control the visibility of the change teacher dialog
  showChangeTeacherDialog: boolean = false;

  constructor(private fb: FormBuilder) {
    this.classForm = this.fb.group({
      name: ['', Validators.required],
      short: ['', Validators.required],
      teacher: ['', Validators.required],
      grade: ['', Validators.required],
      timeOff: ['', Validators.required],
      allowSecondLesson: [false],
      preparation: ['N/A'],
      lunch: ['', Validators.required],
      maxQuestionMarked: ['N/A'],
      specificTimeEveryDay: ['', Validators.required],
      lessonsStartPeriod: ['', Validators.required],
      lessonsEndPeriod: ['', Validators.required],
      lessonsPerDayInterval: ['', Validators.required],
      daysWithLessons: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.data) {
      this.classForm.patchValue(this.data);
    }
  }

  openCustomFields() {
    this.showCustomFieldsDialog2 = true;
  }

  closeCustomFieldsDialog2() {
    this.showCustomFieldsDialog2 = false;
  }

  openChangeClassTeacher() {
    this.showChangeTeacherDialog = true;
  }

  onTeacherSelected(selectedTeachers: { name: string, short: string }[]) {
    const selectedTeacherNames = selectedTeachers.map(teacher => teacher.name).join(', ');
    this.classForm.get('teacher')?.setValue(selectedTeacherNames);
    this.showChangeTeacherDialog = false;
  }

  onCancel(): void {
    this.closeDialog.emit();
  }

  onSave(): void {
    if (this.classForm.valid) {
      if (this.data && this.data.id) {
        Object.assign(this.data, this.classForm.value);
      } else {
        this.data = new Class(this.classForm.value);
      }
      this.refreshClasses.emit();
      this.closeDialog.emit();
    }
  }
}