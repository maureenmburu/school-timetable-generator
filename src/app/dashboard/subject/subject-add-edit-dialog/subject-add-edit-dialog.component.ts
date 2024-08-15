import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from '../../../models/subject.model';

@Component({
  selector: 'app-subject-add-edit-dialog',
  templateUrl: './subject-add-edit-dialog.component.html',
  styleUrls: ['./subject-add-edit-dialog.component.css']
})
export class SubjectAddEditDialogComponent implements OnChanges {
  @Input() showDialog: boolean = false;
  @Input() data: Subject | null = null;
  @Output() refreshSubjects = new EventEmitter<void>();
  @Output() closeDialog = new EventEmitter<void>();

  subjectForm: FormGroup;
  showCustomFieldsDialog: boolean = false;
  showSetClassroomsDialog: boolean = false;
  customFields: { name: string, value: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.subjectForm = this.fb.group({
      title: [''],
      short: [''],
      count: [0],
      timeOff: [''],
      distribution: [''],
      homeworkPreparationRequired: ['N/A'],
      maxOnTheQuestionMarked: ['N/A'],
      doubleLessons: [''],
      color: ['#FFA500'],
      classrooms: ['']
    });
  }

  ngOnChanges() {
    if (this.data) {
      this.subjectForm.patchValue(this.data);
    }
  }

  openCustomFields() {
    this.showCustomFieldsDialog = true;
  }

  closeCustomFieldsDialog() {
    this.showCustomFieldsDialog = false;
  }

  openSetClassroomsDialog() {
    this.showSetClassroomsDialog = true;
  }

  closeSetClassroomsDialog() {
    this.showSetClassroomsDialog = false;
  }

  handleSetClassrooms(option: string) {
    console.log('Selected option:', option);
    // Update the form or perform any other actions needed
    this.showSetClassroomsDialog = false;
  }

  onCancel(): void {
    this.closeDialog.emit();
  }

  onSave(): void {
    if (this.data) {
      Object.assign(this.data, this.subjectForm.value);
    } else {
      this.data = new Subject(this.subjectForm.value);
    }
    this.refreshSubjects.emit();
    this.closeDialog.emit();
  }

  handleAddField(name: string): void {
    if (name) {
      this.customFields.push({ name, value: '' });
    }
  }
}