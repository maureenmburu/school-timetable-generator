import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TeacherService } from '../../../services/teacher.service';
import { Teacher } from '../../../models/teacher.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-add-edit-dialog',
  templateUrl: './teacher-add-edit-dialog.component.html',
  styleUrl: './teacher-add-edit-dialog.component.css'
})
export class TeacherAddEditDialogComponent implements OnChanges  {
  @Input() showDialog: boolean = false;
  @Input() data: Teacher | null = null;
  @Output() refreshTeachers = new EventEmitter<void>();
  @Output() closeDialog = new EventEmitter<void>();

  teacherForm: FormGroup;
  showCustomFieldsDialog: boolean = false;
  customFields: { name: string, value: string }[] = [];
  showClassroomDialog: boolean = false;
  selectedTeachers: { name: string, short: string }[] = [];
  showAddDialog: boolean = false; // Added property

  constructor(private fb: FormBuilder) {
    this.teacherForm = this.fb.group({
      name: ['', Validators.required],
      short: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      count: [0, Validators.required],
      timeOff: ['N/A', Validators.required],
      classTeacher: [false],
      approbation: ['N/A', Validators.required],
      maxWindows: [0, Validators.required],
      daysTaught: [0, Validators.required],
      lessonIntervals: ['N/A', Validators.required],
      maxQuestionsMarked: [0, Validators.required],
      maxWindowsPerDay: [0, Validators.required],
      avoidThreeConsecutiveFreePeriods: [false],
      avoidTwoConsecutiveFreePeriods: [false],
      contract: ['N/A', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.teacherForm.patchValue(this.data);
    } else {
      this.teacherForm.reset({
        timeOff: 'N/A',
        approbation: 'N/A',
        lessonIntervals: 'N/A',
        contract: 'N/A'
      });
    }
  }

  onSave(): void {
    if (this.teacherForm.valid) {
      this.refreshTeachers.emit();
      this.closeDialog.emit();
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

  openClassroomDialog(): void {
    this.showClassroomDialog = true;
  }

  closeClassroomDialog(): void {
    this.showClassroomDialog = false;
  }

  onTeacherSelected(selectedTeachers: { name: string, short: string }[]): void {
    this.selectedTeachers = selectedTeachers;
    this.closeClassroomDialog();
  }

  addField(name: string): void {
    if (name) {
      this.customFields.push({ name, value: '' });
      this.closeAddDialog();
    }
  }

  removeField(index: number): void {
    this.customFields.splice(index, 1);
  }

  openAddDialog(): void {
    this.showAddDialog = true;
  }

  closeAddDialog(): void {
    this.showAddDialog = false;
  }
}