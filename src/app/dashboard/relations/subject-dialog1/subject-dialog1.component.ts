import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicesService } from '../../../subject-class/services.service';

@Component({
  selector: 'app-subject-dialog1',
  templateUrl: './subject-dialog1.component.html',
  styleUrl: './subject-dialog1.component.css'
})
export class SubjectDialog1Component {
  @Input() subjects: any[] = [];
  @Output() save = new EventEmitter<any[]>();
  @Output() cancel = new EventEmitter<void>();

  selectedSubjects: any[] = [];

  onSubjectSelectionChange(event: any) {
    const selectedSubject = event.target.value;
    if (event.target.checked) {
      this.selectedSubjects.push(selectedSubject);
    } else {
      this.selectedSubjects = this.selectedSubjects.filter(subject => subject !== selectedSubject);
    }
  }

  saveSubjects() {
    this.save.emit(this.selectedSubjects);
  }

  cancelDialog() {
    this.cancel.emit();
  }
}