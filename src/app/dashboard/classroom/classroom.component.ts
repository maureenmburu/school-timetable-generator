import { Component, OnInit } from '@angular/core';
import { Classroom } from '../../models/classroom.model';
import { ClassroomService } from '../../services/classroom.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrl: './classroom.component.css'
})
export class ClassroomComponent  implements OnInit  {
  classroomData: Classroom[] = [];
  showDialog: boolean = false;
  selectedClass: Classroom | null = null;
  isLoading: boolean = false;
  error: string = '';

  constructor(private classroomService: ClassroomService) {}

  ngOnInit(): void {
    this.refreshClasses();
  }

  openAddDialog(): void {
    this.selectedClass = null;
    this.showDialog = true;
  }

  editClassroom(classroom: Classroom): void {
    this.selectedClass = classroom;
    this.showDialog = true;
  }

  deleteClassroom(id: number): void {
    this.isLoading = true;
    this.classroomService.deleteClassroom(id).subscribe(
      () => {
        this.refreshClasses();
        this.isLoading = false;
      },
      error => {
        this.error = error;
        this.isLoading = false;
      }
    );
  }

  closeDialog(): void {
    this.showDialog = false;
  }

  refreshClasses(): void {
    this.isLoading = true;
    this.error = '';
    this.classroomService.getClassrooms().subscribe(
      data => {
        this.classroomData = data;
        this.isLoading = false;
      },
      error => {
        this.error = error;
        this.isLoading = false;
      }
    );
  }}