import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../models/teacher.model';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacherData: Teacher[] = [];
  showDialog: boolean = false;
  selectedTeacher: Teacher | null = null;

  // Flags for displaying optional fields
  showCount: boolean = false;
  showTimeOff: boolean = false;
  showApprobation: boolean = false;
  showDaysTaught: boolean = false;
  showLessonIntervals: boolean = false;
  showMaxQuestionsMarked: boolean = false;
  showSpecificTime: boolean = false;

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.refreshTeachers();
  }

  openAddDialog(): void {
    this.selectedTeacher = null;
    this.showDialog = true;
  }

  editTeacher(teacher: Teacher): void {
    this.selectedTeacher = teacher;
    this.showDialog = true;
  }

  deleteTeacher(id: number): void {
    this.teacherService.deleteTeacher(id).subscribe(() => {
      this.refreshTeachers();
    });
  }

  closeDialog(): void {
    this.showDialog = false;
  }

  refreshTeachers(): void {
    this.teacherService.getTeachers().subscribe(data => {
      this.teacherData = data;
      this.setOptionalFieldsVisibility();
    });
  }

  setOptionalFieldsVisibility(): void {
    // Reset all flags
    this.showCount = false;
    this.showTimeOff = false;
    this.showApprobation = false;
    this.showDaysTaught = false;
    this.showLessonIntervals = false;
    this.showMaxQuestionsMarked = false;
    this.showSpecificTime = false;

    // Check if any teacher has the optional fields
    for (let teacher of this.teacherData) {
      if (teacher.count !== undefined && teacher.count !== null) this.showCount = true;
      if (teacher.timeOff !== undefined && teacher.timeOff !== null) this.showTimeOff = true;
      if (teacher.Qualification !== undefined && teacher.Qualification !== null) this.showApprobation = true;
      if (teacher.daysTaught !== undefined && teacher.daysTaught !== null) this.showDaysTaught = true;
      if (teacher.lessonIntervals !== undefined && teacher.lessonIntervals !== null) this.showLessonIntervals = true;
      if (teacher.maxQuestionsMarked !== undefined && teacher.maxQuestionsMarked !== null) this.showMaxQuestionsMarked = true;
      // if (teacher.specificTime !== undefined && teacher.specificTime !== null) this.showSpecificTime = true;
    }
  }

  getOptionalField(value: any): string {
    return value !== undefined && value !== null ? value : 'N/A';
  }

  toggleClassTeacher(teacher: Teacher): void {
    teacher.classTeacher = !teacher.classTeacher;
    this.teacherService.updateTeacher(teacher).subscribe(() => {
      this.refreshTeachers();
    });
  }
}
