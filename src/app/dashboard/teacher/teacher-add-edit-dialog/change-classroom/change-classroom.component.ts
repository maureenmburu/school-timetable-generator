import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TeachService } from '../../../../services/teach.service';

@Component({
  selector: 'app-change-classroom',
  templateUrl: './change-classroom.component.html',
  styleUrl: './change-classroom.component.css'
})
export class ChangeClassroomComponent  implements OnInit  {
  @Input() selectedTeachers: { name: string, short: string }[] = [];
  @Input() showDialog: boolean = false; // Controls dialog visibility
  @Output() teacherSelected = new EventEmitter<{ name: string, short: string }[]>();
  @Output() closeDialog = new EventEmitter<void>();

  teachers: { name: string, short: string }[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private teachService: TeachService) {}

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers(): void {
    this.isLoading = true;
    this.error = null;
    this.teachService.getTeachers().subscribe(
      data => {
        this.teachers = data;
        this.isLoading = false;
      },
      error => {
        this.error = 'Failed to load teachers. Please try again later.';
        this.isLoading = false;
      }
    );
  }

  isSelected(teacher: { name: string, short: string }): boolean {
    return this.selectedTeachers.some(t => t.short === teacher.short);
  }

  selectTeacher(teacher: { name: string, short: string }): void {
    const index = this.selectedTeachers.findIndex(t => t.short === teacher.short);
    if (index > -1) {
      this.selectedTeachers.splice(index, 1);
    } else {
      this.selectedTeachers.push(teacher);
    }
  }

  selectAll(): void {
    this.selectedTeachers = [...this.teachers];
  }

  removeAll(): void {
    this.selectedTeachers = [];
  }

  onSave(): void {
    this.teacherSelected.emit(this.selectedTeachers);
    this.closeDialog.emit();
  }

  onCancel(): void {
    this.closeDialog.emit();
  }
}