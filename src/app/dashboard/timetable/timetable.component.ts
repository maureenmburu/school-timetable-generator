import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Classroom } from '../../models/classroom.model';
import { Class } from '../../models/class.model';
import { Teacher } from '../../models/teacher.model';
import { Period } from '../../models/period.model';
import { ClassroomService } from '../../services/classroom.service';
import { ClassService } from '../../services/class.service';
import { TeacherService } from '../../services/teacher.service';
import { PeriodService } from '../../services/period.service';
import { Relations } from '../../models/relations.model';
import { Day } from '../../models/day.model';
import { Setting } from '../../models/setting.model';
import { Subject } from '../../models/subject.model';
import { SubjectService } from '../../services/subject.service';
import { SettingService } from '../../services/setting.service';
import { RelationsService } from '../../services/relations.service';
import { DaysService } from '../../services/days.service';
import { catchError, of } from 'rxjs';



@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.css'
})
export class TimetableComponent implements OnInit {
  classrooms: Classroom[] = [];
  classes: Class[] = [];
  teachers: Teacher[] = [];
  periods: Period[] = [];
  days: Day[] = [];
  relations: Relations | undefined;
  settings: Setting[] = [];
  subjects: Subject[] = [];
  timetable: { [key: number]: { class: Class, teacher: Teacher, classroom: Classroom, period: Period }[] } = {};

  loading = false; // Track loading state
  progress = 0;    // Track progress percentage
  errorMessage = ''; // Track error messages

  constructor(
    private classroomService: ClassroomService,
    private classService: ClassService,
    private teacherService: TeacherService,
    private periodService: PeriodService,
    private daysService: DaysService,
    private relationsService: RelationsService,
    private settingService: SettingService,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.classroomService.getClassrooms().pipe(
      catchError(error => {
        this.handleError(error);
        return of([]);
      })
    ).subscribe((data: Classroom[]) => this.classrooms = data);

    this.classService.getClasses().pipe(
      catchError(error => {
        this.handleError(error);
        return of([]);
      })
    ).subscribe((data: Class[]) => this.classes = data);

    this.teacherService.getTeachers().pipe(
      catchError(error => {
        this.handleError(error);
        return of([]);
      })
    ).subscribe((data: Teacher[]) => this.teachers = data);

    this.periodService.getPeriods().pipe(
      catchError(error => {
        this.handleError(error);
        return of([]);
      })
    ).subscribe((data: Period[]) => this.periods = data);

    this.daysService.getDays().pipe(
      catchError(error => {
        this.handleError(error);
        return of([]);
      })
    ).subscribe((data: Day[]) => this.days = data);

    this.settingService.getSettings().pipe(
      catchError(error => {
        this.handleError(error);
        return of([]);
      })
    ).subscribe((data: Setting[]) => this.settings = data);

    this.subjectService.getSubjects().pipe(
      catchError(error => {
        this.handleError(error);
        return of([]);
      })
    ).subscribe((data: Subject[]) => this.subjects = data);

    this.relationsService.getRelations().pipe(
      catchError(error => {
        this.handleError(error);
        return of(undefined);
      })
    ).subscribe((data: Relations | undefined) => {
      if (data) {
        this.relations = data;
      } else {
        this.handleError('Failed to fetch relations data.');
      }
    });
  }

  generateTimetable(): void {
    this.loading = true; // Start loading
    this.progress = 0; // Reset progress

    // Simulate timetable generation process
    const interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 10; // Increment progress
      } else {
        clearInterval(interval); // Stop the interval
        this.loading = false; // Stop loading
        this.populateTimetable(); // Call your actual timetable generation logic
      }
    }, 500); // Simulate time for each step (500ms)
  }

  populateTimetable(): void {
    this.timetable = {}; // Initialize timetable object
    for (const classItem of this.classes) {
      const teacher = this.teachers.find(t => t.name === classItem.teacher);
      if (!teacher) continue; // Skip if teacher not found
      for (const period of this.periods) {
        for (const classroom of this.classrooms) {
          if (this.isValidAssignment(classItem, period, classroom, teacher)) {
            if (!this.timetable[period.id]) {
              this.timetable[period.id] = [];
            }
            this.timetable[period.id].push({
              class: classItem,
              teacher: teacher!,
              classroom: classroom,
              period: period
            });
            break; // Exit loops once assigned
          }
        }
      }
    }
  }

  isValidAssignment(classItem: Class, period: Period, classroom: Classroom, teacher: Teacher): boolean {
    const teacherAvailable = this.isTeacherAvailable(teacher, period);
    const capacityOk = classroom.count >= parseInt(classItem.maxQuestionMarked, 10);
    const classroomTypeOk = classItem.schedule === 'Lab' ? classroom.type === 'Lab' : true;

    return teacherAvailable && capacityOk && classroomTypeOk;
  }

  isTeacherAvailable(teacher: Teacher, period: Period): boolean {
    // Check if the teacher is free during this period
    return true; // Implement actual logic
  }

  private handleError(error: any): void {
    this.errorMessage = 'An error occurred while generating the timetable. Please check the backend connection.';
    console.error('Error: ', error); // Log error to console or send to logging service
    this.loading = false; // Stop loading
  }
}