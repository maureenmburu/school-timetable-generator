import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-days',
  templateUrl: './edit-days.component.html',
  styleUrl: './edit-days.component.css'
})
export class EditDaysComponent implements OnInit {
  
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  editDaysForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editDaysForm = this.fb.group({
      dayName: [''],
      shortName: ['']
    });
  }

  saveEdit(): void {
    if (this.editDaysForm.valid) {
      const formValues = this.editDaysForm.value;
      this.save.emit(formValues);
    } else {
      console.log('Form is invalid');
    }
  }

  closeDialog(): void {
    this.close.emit();
  }
}


