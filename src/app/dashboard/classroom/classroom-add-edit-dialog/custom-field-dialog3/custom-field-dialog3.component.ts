import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomFields3Service } from '../../../../services/custom-fields3.service';
import { CustomFields3 } from '../../../../models/custom-fields3.model';

@Component({
  selector: 'app-custom-field-dialog3',
  templateUrl: './custom-field-dialog3.component.html',
  styleUrl: './custom-field-dialog3.component.css'
})
export class CustomFieldDialog3Component implements OnInit {
  @Input() showDialog: boolean = false;
  @Input() customFields: CustomFields3[] = [];
  @Output() closeDialog = new EventEmitter<void>();

  newFieldName: string = '';
  newFieldValue: string = '';
  renamingIndex: number = -1;
  renameFieldName: string = '';
  renameFieldValue: string = '';
  showAddDialog: boolean = false;
  isLoading: boolean = false;
  error: string = '';

  constructor(private customFieldsService: CustomFields3Service) {}

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

  addField(fieldName: string): void {
    if (fieldName) {
      this.isLoading = true;
      const newField = new CustomFields3(fieldName, ''); // Assuming new fields start with an empty value
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
      const updatedField = new CustomFields3(this.renameFieldName, this.renameFieldValue);
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