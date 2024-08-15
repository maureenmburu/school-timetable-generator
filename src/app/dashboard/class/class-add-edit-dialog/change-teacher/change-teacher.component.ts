import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-change-teacher',
  templateUrl: './change-teacher.component.html',
  styleUrls: ['./change-teacher.component.css']
})
export class ChangeTeacherComponent implements OnInit {
  teachers: { name: string, short: string }[] = [];
  selectedTeachers: { name: string, short: string }[] = [];
  isLoading = false; // To track loading state
  error = ''; // To store error messages

  @Output() teacherSelected = new EventEmitter<{ name: string, short: string }[]>();
  @Output() closeDialog = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTeachers();
  }

  fetchTeachers() {
    this.isLoading = true; // Start loading indicator
    this.http.get<{ name: string, short: string }[]>('backend-url-to-fetch-teachers')
      .pipe(
        catchError(err => {
          this.error = 'Failed to load teacher data.'; // Error handling
          console.error('Error fetching teachers', err);
          this.isLoading = false; // Stop loading indicator
          return of([]); // Return an empty array in case of error
        })
      )
      .subscribe(data => {
        this.teachers = data;
        this.isLoading = false; // Stop loading indicator
      });
  }

  selectAll() {
    this.selectedTeachers = [...this.teachers];
  }

  removeAll() {
    this.selectedTeachers = [];
  }

  selectTeacher(teacher: { name: string, short: string }) {
    const index = this.selectedTeachers.findIndex(t => t.name === teacher.name && t.short === teacher.short);
    if (index === -1) {
      this.selectedTeachers.push(teacher);
    } else {
      this.selectedTeachers.splice(index, 1);
    }
  }

  isSelected(teacher: { name: string, short: string }) {
    return this.selectedTeachers.some(t => t.name === teacher.name && t.short === teacher.short);
  }

  onSave() {
    this.teacherSelected.emit(this.selectedTeachers);
    this.closeDialog.emit();
  }

  onCancel() {
    this.closeDialog.emit();
  }
}
