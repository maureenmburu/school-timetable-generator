import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Exam } from '../../../models/exam.model';
import { ExamService } from '../../../services/exam.service';

@Component({
  selector: 'app-exam-edit-dialog',
  templateUrl: './exam-edit-dialog.component.html',
  styleUrl: './exam-edit-dialog.component.css'
})
export class ExamEditDialogComponent implements OnInit {
  @Input() showDialog: boolean = false;
  @Input() data: Exam | null = null; // Use data for edit functionality
  @Output() refreshExams = new EventEmitter<void>();
  @Output() closeDialog = new EventEmitter<void>();
  examForm!: FormGroup;

  constructor(private fb: FormBuilder, private examService: ExamService) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.examForm) {
      this.examForm.patchValue({
        subject: this.data?.subject || '',
        date: this.data?.date || '',
        startTime: this.data?.startTime || '',
        endTime: this.data?.endTime || '',
        classroom: this.data?.classroom || ''
      });
    }
  }

  initForm(): void {
    this.examForm = this.fb.group({
      subject: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      classroom: ['', Validators.required]
    });

    if (this.data) {
      this.examForm.patchValue({
        subject: this.data.subject,
        date: this.data.date,
        startTime: this.data.startTime,
        endTime: this.data.endTime,
        classroom: this.data.classroom
      });
    }
  }

  onSave(): void {
    if (this.examForm.valid) {
      const exam = new Exam(
        this.data?.id || 0,
        this.examForm.value.subject,
        this.examForm.value.date,
        this.examForm.value.startTime,
        this.examForm.value.endTime,
        this.examForm.value.classroom
      );

      if (this.data?.id) {
        this.examService.updateExam(exam).subscribe(() => {
          this.refreshExams.emit();
          this.closeDialog.emit();
        });
      } else {
        this.examService.addExam(exam).subscribe(() => {
          this.refreshExams.emit();
          this.closeDialog.emit();
        });
      }
    }
  }

  onCancel(): void {
    this.closeDialog.emit();
  }

}
