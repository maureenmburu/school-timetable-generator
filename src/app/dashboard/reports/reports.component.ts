import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { Report } from '../../models/report.model';
import { ActivitiesService } from '../../services/activities.service';
import { ExamService } from '../../services/exam.service';
import { Activity } from '../../models/activity.model';
import { Exam } from '../../models/exam.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class ReportsComponent implements OnInit {
  activities: Activity[] = [];
  exams: Exam[] = [];

  constructor(
    private activitiesService: ActivitiesService,
    private examService: ExamService,
    private reportService: ReportService // Optional: Inject if you need this service later
  ) {}

  ngOnInit(): void {
    this.loadActivities();
    this.loadExams();
  }

  loadActivities(): void {
    this.activitiesService.getActivities().subscribe(
      (data: Activity[]) => {
        this.activities = data;
      },
      (error) => {
        console.error('Error loading activities:', error); // Handle errors
      }
    );
  }

  loadExams(): void {
    this.examService.getExams().subscribe(
      (data: Exam[]) => {
        this.exams = data;
      },
      (error) => {
        console.error('Error loading exams:', error); // Handle errors
      }
    );
  }
}
