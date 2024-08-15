import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-add',
  templateUrl: './custom-add.component.html',
  styleUrl: './custom-add.component.css'
})
export class CustomAddComponent {
  @Input() showDialog: boolean = false;
  @Output() addField = new EventEmitter<string>();
  @Output() closeDialog = new EventEmitter<void>();

  fieldName: string = '';

  onAdd(): void {
    if (this.fieldName) {
      this.addField.emit(this.fieldName);
      this.fieldName = '';
    }
  }

  onCancel(): void {
    this.closeDialog.emit();
  }

}
