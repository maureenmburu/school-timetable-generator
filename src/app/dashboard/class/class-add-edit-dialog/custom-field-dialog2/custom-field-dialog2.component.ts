import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomField2 } from '../../../../models/custom-field2.model';
import { CustomField2Service } from '../../../../services/custom-field2.service';

@Component({
  selector: 'app-custom-field-dialog2',
  templateUrl: './custom-field-dialog2.component.html',
  styleUrl: './custom-field-dialog2.component.css'
})
export class CustomFieldDialog2Component implements OnInit {
  @Input() customFields: CustomField2[] = []; // Correctly defined as an @Input property
  @Input() showDialog: boolean = false;
  @Output() closeDialog = new EventEmitter<void>();
  @Output() addField = new EventEmitter<CustomField2>();
  @Output() renameField = new EventEmitter<{ oldName: string, newName: string }>();
  @Output() removeField = new EventEmitter<string>();

  customFieldsForm: FormGroup;
  showNewCustomFieldDialog = false;
  showRenameDialog = false;
  selectedFieldName: string = '';

  constructor(private fb: FormBuilder, private customFieldService: CustomField2Service) {
    this.customFieldsForm = this.fb.group({
      fieldName: [''],
      fieldValue: ['']
    });
  }

  ngOnInit(): void {
    this.fetchCustomFields();
  }

  fetchCustomFields(): void {
    this.customFieldService.getCustomFields().subscribe(
      data => this.customFields = data,
      error => console.error('Error fetching custom fields', error)
    );
  }

  onAdd(): void {
    this.showNewCustomFieldDialog = true;
  }

  closeNewCustomFieldDialog(): void {
    this.showNewCustomFieldDialog = false;
  }

  handleAddNewField(fieldName: string): void {
    const newField = new CustomField2(fieldName, '');
    this.customFieldService.addCustomField(newField).subscribe(
      data => {
        this.customFields.push(data);
        this.addField.emit(data);
      },
      error => console.error('Error adding custom field', error)
    );
    this.closeNewCustomFieldDialog();
  }

  onRename(): void {
    this.selectedFieldName = this.customFieldsForm.value.fieldName;
    this.showRenameDialog = true;
  }

  closeRenameDialog(): void {
    this.showRenameDialog = false;
  }

  handleRenameField(newName: string): void {
    this.customFieldService.renameCustomField(this.selectedFieldName, newName).subscribe(
      data => {
        const index = this.customFields.findIndex(field => field.name === this.selectedFieldName);
        if (index !== -1) {
          this.customFields[index].name = newName;
          this.renameField.emit({ oldName: this.selectedFieldName, newName });
        }
      },
      error => console.error('Error renaming custom field', error)
    );
    this.closeRenameDialog();
  }

  onRemove(): void {
    const fieldName = this.customFieldsForm.value.fieldName;
    this.customFieldService.removeCustomField(fieldName).subscribe(
      () => {
        this.customFields = this.customFields.filter(field => field.name !== fieldName);
        this.removeField.emit(fieldName);
      },
      error => console.error('Error removing custom field', error)
    );
  }

  onClose(): void {
    this.closeDialog.emit();
  }}