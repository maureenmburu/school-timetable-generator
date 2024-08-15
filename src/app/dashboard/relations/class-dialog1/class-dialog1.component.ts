import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicesService } from '../../../subject-class/services.service';

@Component({
  selector: 'app-class-dialog1',
  templateUrl: './class-dialog1.component.html',
  styleUrl: './class-dialog1.component.css'
})
export class ClassDialog1Component {
  @Input() classes: any[] = [];
  @Output() save = new EventEmitter<any[]>();
  @Output() cancel = new EventEmitter<void>();

  selectedClasses: any[] = [];

  toggleSelectAll(event: any) {
    const isChecked = event.target.checked;
    this.selectedClasses = isChecked ? this.classes.map(cls => cls.name) : [];
    this.classes.forEach(cls => cls.selected = isChecked);
  }

  onClassSelectionChange(event: any) {
    const selectedClass = event.target.value;
    if (event.target.checked) {
      this.selectedClasses.push(selectedClass);
    } else {
      this.selectedClasses = this.selectedClasses.filter(cls => cls !== selectedClass);
    }
  }

  saveClasses() {
    this.save.emit(this.selectedClasses);
  }

  cancelDialog() {
    this.cancel.emit();
  }
}
