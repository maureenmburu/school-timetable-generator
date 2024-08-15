import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomField } from '../../../../../models/custom-field.model';

@Component({
  selector: 'app-add1',
  templateUrl: './add1.component.html',
  styleUrl: './add1.component.css'
})
export class Add1Component {
  @Input() showDialog: boolean = false;
  @Output() addField = new EventEmitter<CustomField>();
  @Output() closeDialog = new EventEmitter<void>();

  newFieldName: string = '';
  newFieldValue: string = '';

  // Static counter for generating unique IDs
  private static idCounter = 0;

  // Emit the new field data and close the dialog
  add() {  
    if (this.newFieldName && this.newFieldValue) {
      const newField: CustomField = {
        id: (Add1Component.idCounter++).toString(), // Generate unique ID
        name: this.newFieldName,
        value: this.newFieldValue
      };
      this.addField.emit(newField);
      this.closeDialog.emit();
    }
  }

  // Emit the event to close the dialog
  close() {
    this.closeDialog.emit();
  }
}


