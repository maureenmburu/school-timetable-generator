import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-addcustom',
  templateUrl: './addcustom.component.html',
  styleUrls: ['./addcustom.component.css']  // Corrected to styleUrls
})
export class AddcustomComponent {
  @Input() showDialog: boolean = false;
  @Output() addField = new EventEmitter<{ name: string, value: string }>(); // Emit an object
  @Output() closeDialog = new EventEmitter<void>();

  newFieldName: string = '';

  add(): void {
    if (this.newFieldName.trim()) {
      this.addField.emit({ name: this.newFieldName.trim(), value: '' }); // Emit an object with name and value
      this.newFieldName = '';
    }
  }

  close(): void {
    this.closeDialog.emit();
  }
}

