import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-dialog2',
  templateUrl: './add-dialog2.component.html',
  styleUrls: ['./add-dialog2.component.css']
})
export class AddDialog2Component {
  @Output() close = new EventEmitter<void>();
  @Output() addField = new EventEmitter<string>();
  newFieldForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newFieldForm = this.fb.group({
      newFieldName: ['']
    });
  }

  onAdd(): void {
    const fieldName = this.newFieldForm.value.newFieldName;
    this.addField.emit(fieldName);
    this.close.emit();
  }

  onCancel(): void {
    this.close.emit();
  }
}