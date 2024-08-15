import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomFields4 } from '../../../../models/custom-fields4.model';
import { CustomFields4Service } from '../../../../services/custom-fields4.service';

@Component({
  selector: 'app-custom-field-dialog4',
  templateUrl: './custom-field-dialog4.component.html',
  styleUrl: './custom-field-dialog4.component.css'
})
export class CustomFieldDialog4Component implements OnInit{
  @Input() showDialog: boolean = false;
  @Input() customFields: CustomFields4[] = [];
  @Output() closeDialog = new EventEmitter<void>();

  newFieldName: string = '';
  newFieldValue: string = '';
  renamingIndex: number = -1;
  renameFieldName: string = '';
  renameFieldValue: string = '';
  showAddDialog: boolean = false;
  isLoading: boolean = false;
  error: string = '';

  constructor(private customFieldsService: CustomFields4Service) {}

  ngOnInit(): void {
    this.fetchCustomFields();
  }

  fetchCustomFields(): void {
    this.isLoading = true;
    this.error = '';
    this.customFieldsService.getCustomFields().subscribe(
      data => {
        this.customFields = data;
        this.isLoading = false;
      },
      error => {
        this.error = 'Failed to load custom fields.';
        this.isLoading = false;
      }
    );
  }

  close(): void {
    this.closeDialog.emit();
  }

  addField(field: { name: string; value: string }): void {
    if (field.name.trim()) {
      this.isLoading = true;
      const newField = new CustomFields4(field.name.trim(), field.value.trim());
      this.customFieldsService.addCustomField(newField).subscribe(
        data => {
          this.customFields.push(data);
          this.isLoading = false;
          this.closeAddDialog();
        },
        error => {
          this.error = 'Failed to add custom field.';
          this.isLoading = false;
        }
      );
    }
  }

  removeField(index: number): void {
    const fieldName = this.customFields[index].name;
    this.isLoading = true;
    this.customFieldsService.deleteCustomField(fieldName).subscribe(
      () => {
        this.customFields.splice(index, 1);
        this.isLoading = false;
        if (this.renamingIndex === index) {
          this.cancelRename();
        }
      },
      error => {
        this.error = 'Failed to remove custom field.';
        this.isLoading = false;
      }
    );
  }

  startRenaming(index: number): void {
    this.renamingIndex = index;
    this.renameFieldName = this.customFields[index].name;
    this.renameFieldValue = this.customFields[index].value;
  }

  saveRename(): void {
    if (this.renamingIndex !== -1 && this.renameFieldName && this.renameFieldValue) {
      this.isLoading = true;
      const updatedField = new CustomFields4(this.renameFieldName, this.renameFieldValue);
      this.customFieldsService.updateCustomField(updatedField).subscribe(
        () => {
          this.customFields[this.renamingIndex] = updatedField;
          this.isLoading = false;
          this.cancelRename();
        },
        error => {
          this.error = 'Failed to rename custom field.';
          this.isLoading = false;
        }
      );
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
    this.newFieldName = '';
    this.newFieldValue = '';
  }}