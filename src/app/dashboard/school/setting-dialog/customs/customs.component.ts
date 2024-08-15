import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomField } from '../../../../models/custom-field.model';
import { CustomFieldService } from '../../../../services/custom-field.service';

@Component({
  selector: 'app-customs',
  templateUrl: './customs.component.html',
  styleUrl: './customs.component.css'
})
export class CustomsComponent  implements OnInit{
  @Input() showDialog: boolean = false; // Controls the visibility of the dialog
  @Output() closeDialog = new EventEmitter<void>();

  customFields: CustomField[] = []; // Array to store custom fields
  renamingIndex: number = -1; // Index of the field currently being renamed
  renameFieldName: string = ''; // Temporary storage for the new field name
  renameFieldValue: string = ''; // Temporary storage for the new field value

  showAddDialog: boolean = false; // Controls the visibility of the add custom field dialog

  constructor(private customFieldService: CustomFieldService) {}

  ngOnInit(): void {
    this.loadCustomFields();
  }

  // Method to fetch and load custom fields
  loadCustomFields(): void {
    this.customFieldService.getCustomFields().subscribe(fields => {
      this.customFields = fields;
    });
  }

  // Method to open the renaming input fields
  startRenaming(index: number): void {
    this.renamingIndex = index;
    this.renameFieldName = this.customFields[index].name;
    this.renameFieldValue = this.customFields[index].value;
  }

  // Method to save the renamed field
  saveRename(): void {
    if (this.renamingIndex !== -1) {
      const id = this.customFields[this.renamingIndex].id; // Ensure id is captured

      const updatedField: CustomField = {
        id: id, // Include id
        name: this.renameFieldName,
        value: this.renameFieldValue
      };

      this.customFieldService.updateCustomField(id, updatedField).subscribe(() => {
        this.customFields[this.renamingIndex] = updatedField;
        this.cancelRename(); // Reset renaming state
      });
    }
  }

  // Method to cancel the renaming process
  cancelRename(): void {
    this.renamingIndex = -1;
    this.renameFieldName = '';
    this.renameFieldValue = '';
  }

  // Method to remove a field from the list
  removeField(index: number): void {
    const id = this.customFields[index].id; // Ensure id is captured

    this.customFieldService.deleteCustomField(id).subscribe(() => {
      this.customFields.splice(index, 1); // Remove the field at the given index
    });
  }

  // Method to open the add field dialog
  openAddDialog(): void {
    this.showAddDialog = true;
  }

  // Method to handle adding a new field
  addField(newField: CustomField): void {
    this.customFieldService.addCustomField(newField).subscribe(addedField => {
      this.customFields.push(addedField);
      this.closeAddDialog(); // Close the add dialog
    });
  }

  // Method to close the add field dialog
  closeAddDialog(): void {
    this.showAddDialog = false;
  }

  // Method to close the main custom fields dialog
  close(): void {
    this.closeDialog.emit(); // Emit the close event to the parent component
  }
}