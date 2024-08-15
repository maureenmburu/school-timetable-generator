import { Component, OnInit, ViewChild } from '@angular/core';
import { Class } from '../../models/class.model';
import { ClassService } from '../../services/class.service';
import { ClassAddEditDialogComponent } from './class-add-edit-dialog/class-add-edit-dialog.component';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class ClassComponent implements OnInit {
  classData: Class[] = [];
  showDialog = false;
  selectedClass: Class | null = null;

  constructor(private classService: ClassService) {}

  ngOnInit() {
    this.refreshClasses();
  }

  openAddDialog() {
    this.selectedClass = null;
    this.showDialog = true;
  }

  editClass(classObj: Class) {
    this.selectedClass = { ...classObj };
    this.showDialog = true;
  }

  deleteClass(id: number | undefined) {
    if (id !== undefined) {
      this.classService.deleteClass(id).subscribe(() => {
        this.refreshClasses();
      });
    }
  }

  refreshClasses() {
    this.classService.getClasses().subscribe(data => {
      this.classData = data;
    });
  }

  closeDialog() {
    this.showDialog = false;
  }
}
