import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Exam } from '../../models/exam.model';
import { ExamService } from '../../services/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent implements OnInit{
  examData: Exam[] = [];
  showDialog = false;
  selectedExam: Exam | null = null;

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.loadExams();
  }

  loadExams(): void {
    this.examService.getExams().subscribe((data: Exam[]) => {
      this.examData = data;
    });
  }

  openAddDialog(): void {
    this.selectedExam = null;
    this.showDialog = true;
  }

  editExam(exam: Exam): void {
    this.selectedExam = exam;
    this.showDialog = true;
  }

  closeDialog(): void {
    this.showDialog = false;
  }

  refreshExams(): void {
    this.loadExams();
  }

  deleteExam(id: number): void {
    this.examService.deleteExam(id).subscribe(() => {
      this.loadExams();
    });
  }
}
