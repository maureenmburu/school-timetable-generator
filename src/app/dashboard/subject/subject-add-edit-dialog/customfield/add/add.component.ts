import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomField1Service } from '../../../../../services/custom-field1.service';
import { CustomField1 } from '../../../../../models/custom-field1.model';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Input() showDialog: boolean = false;
  @Output() addField = new EventEmitter<string>(); // Emit a string
  @Output() closeDialog = new EventEmitter<void>();

  newFieldName: string = '';

  constructor(private customFieldService: CustomField1Service) {}

  add(): void {
    if (this.newFieldName.trim()) {
      const newField = new CustomField1(this.newFieldName, '');
      this.customFieldService.addCustomField(newField).subscribe(() => {
        this.addField.emit(this.newFieldName); // Emit the new field name
        this.close(); // Close the dialog
      });
    }
  }

  close(): void {
    this.closeDialog.emit(); // Notify parent to close the dialog
  }}
