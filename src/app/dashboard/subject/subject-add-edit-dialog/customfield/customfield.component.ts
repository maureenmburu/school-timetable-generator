import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-customfield',
  templateUrl: './customfield.component.html',
  styleUrl: './customfield.component.css'
})
export class CustomfieldComponent {
  @Input() showDialog: boolean = false;
  @Input() customFields: { name: string, value: string }[] = [];
  @Output() closeDialog = new EventEmitter<void>();

  renamingIndex: number = -1;
  renameFieldName: string = '';
  renameFieldValue: string = '';
  showAddDialog: boolean = false;

  close(): void {
    this.closeDialog.emit();
  }

  addFieldToParent(fieldName: string): void {
    if (fieldName) {
      this.customFields.push({ name: fieldName, value: '' });
      this.closeAddDialog();
    }
  }

  removeField(index: number): void {
    this.customFields.splice(index, 1);
    if (this.renamingIndex === index) {
      this.cancelRename();
    }
  }

  startRenaming(index: number): void {
    this.renamingIndex = index;
    this.renameFieldName = this.customFields[index].name;
    this.renameFieldValue = this.customFields[index].value;
  }

  saveRename(): void {
    if (this.renamingIndex !== -1 && this.renameFieldName && this.renameFieldValue) {
      this.customFields[this.renamingIndex].name = this.renameFieldName;
      this.customFields[this.renamingIndex].value = this.renameFieldValue;
      this.cancelRename();
    }
  }

  cancelRename(): void {
    this.renamingIndex = -1;
    this.renameFieldName = '';
    this.renameFieldValue = '';
  }

  openAddDialog(): void {
    this.showAddDialog = true;
  }

  closeAddDialog(): void {
    this.showAddDialog = false;
  }}