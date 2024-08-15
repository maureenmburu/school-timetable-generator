import { Component, OnInit, ViewChild } from '@angular/core';

import { Subject } from '../../models/subject.model'; 
import { SubjectService } from '../../services/subject.service';
import { SubjectAddEditDialogComponent } from './subject-add-edit-dialog/subject-add-edit-dialog.component';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit  {
  showDialog = false;
  selectedSubject: Subject | null = null;
  subjectData: Subject[] = [];

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.refreshSubjects();
  }

  openAddDialog() {
    this.selectedSubject = null;
    this.showDialog = true;
  }

  editSubject(subject: Subject) {
    this.selectedSubject = subject;
    this.showDialog = true;
  }

  deleteSubject(id: number | undefined) {
    if (id !== undefined) {
      this.subjectService.deleteSubject(id).subscribe(() => this.refreshSubjects());
    }
  }

  refreshSubjects() {
    this.subjectService.getSubjects().subscribe((data: Subject[]) => this.subjectData = data);
  }

  closeDialog() {
    this.showDialog = false;
  }
}
