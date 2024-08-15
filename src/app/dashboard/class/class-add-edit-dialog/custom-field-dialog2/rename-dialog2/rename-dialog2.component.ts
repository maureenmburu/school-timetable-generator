import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rename-dialog2',
  templateUrl: './rename-dialog2.component.html',
  styleUrls: ['./rename-dialog2.component.css']
})
export class RenameDialog2Component {
  @Input() showDialog: boolean = false;
  @Input() currentName: string = '';
  @Output() closeDialog = new EventEmitter<void>();
  @Output() rename = new EventEmitter<string>();

  renameForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.renameForm = this.fb.group({
      newName: ['', Validators.required]
    });
  }

  onRename(): void {
    if (this.renameForm.valid) {
      this.rename.emit(this.renameForm.value.newName);
      this.onCancel();
    }
  }

  onCancel(): void {
    this.closeDialog.emit();
  }
}