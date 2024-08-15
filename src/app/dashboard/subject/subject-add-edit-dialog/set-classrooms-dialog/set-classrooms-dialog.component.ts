import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-set-classrooms-dialog',
  templateUrl: './set-classrooms-dialog.component.html',
  styleUrls: ['./set-classrooms-dialog.component.css']
})
export class SetClassroomsDialogComponent {
  @Output() closeDialog = new EventEmitter<void>();
  @Output() confirmDialog = new EventEmitter<string>();

  selectedOption: string = '';

  onConfirm(): void {
    this.confirmDialog.emit(this.selectedOption);
    this.closeDialog.emit();
  }

  onCancel(): void {
    this.closeDialog.emit();
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
