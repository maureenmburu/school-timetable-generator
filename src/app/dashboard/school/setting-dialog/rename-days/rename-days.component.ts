import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Day } from '../../../../models/day.model';
import { DaysService } from '../../../../services/days.service';

@Component({
  selector: 'app-rename-days',
  templateUrl: './rename-days.component.html',
  styleUrl: './rename-days.component.css'
})
export class RenameDaysComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  renameDaysForm!: FormGroup;
  editDaysForm!: FormGroup;
  daysCountControl = new FormControl<number>(5); // Initialize with default value
  allDays: Day[] = []; // Use Day model instances
  daysToShow: Day[] = [];
  showEditDaysDialog = false;
  showCombineDaysDialog = false;
  showDeleteDaysDialog = false;

  selectedDay: Day | null = null;

  constructor(private fb: FormBuilder, private daysService: DaysService) {}

  ngOnInit(): void {
    this.renameDaysForm = this.fb.group({
      days: this.daysCountControl, // Use FormControl in form group
      helpText: [''],
    });

    this.editDaysForm = this.fb.group({
      dayName: [''],
      shortName: ['']
    });

    this.loadDays(); // Load days from the service
  }

  loadDays(): void {
    this.daysService.getDays().subscribe((days: Day[]) => {
      this.allDays = days;
      this.updateDaysList(this.daysCountControl.value!);
    });
  }

  updateDaysList(daysCount: number): void {
    this.daysToShow = this.allDays.slice(0, daysCount);
  }

  onDaysChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    const daysCount = +value; // Convert the string value to number
    this.updateDaysList(daysCount);
  }

  saveDays(): void {
    if (this.renameDaysForm.valid) {
      const formValues = this.renameDaysForm.value;
      console.log('Days saved', formValues);
      this.closeDialog();
    } else {
      console.log('Form is invalid');
    }
  }

  editDay(day: Day): void {
    this.selectedDay = day;
    this.showEditDaysDialog = true;
    this.editDaysForm.patchValue({
      dayName: day.name,
      shortName: day.short
    });
  }

  handleSaveEdit(formValues: any): void {
    console.log('Day edited', formValues);
    if (this.selectedDay) {
      const updatedDay = new Day(formValues.dayName, formValues.shortName, this.selectedDay.description, this.selectedDay.combinedWith);
      this.daysService.updateDay(updatedDay).subscribe(() => {
        const index = this.daysToShow.findIndex(d => d.name === this.selectedDay!.name);
        if (index !== -1) {
          this.daysToShow[index] = updatedDay;
        }
        this.selectedDay = null;
        this.showEditDaysDialog = false;
      });
    }
  }

  closeEditDaysDialog(): void {
    this.showEditDaysDialog = false;
    this.selectedDay = null;
  }

  showCombineDialog(): void {
    this.showCombineDaysDialog = true;
  }

  closeCombineDaysDialog(): void {
    this.showCombineDaysDialog = false;
  }

  showDeleteDialog(day: Day): void {
    this.selectedDay = day;
    this.showDeleteDaysDialog = true;
  }

  closeDeleteDaysDialog(): void {
    this.showDeleteDaysDialog = false;
    this.selectedDay = null;
  }

  combineDay(day: Day): void {
    const daysToCombine = prompt('Enter the days to combine with this one, separated by commas', '');
    if (daysToCombine) {
      day.combinedWith = daysToCombine.split(',').map((d: string) => d.trim());
      this.daysService.combineDays([day]).subscribe(() => {
        console.log('Days combined', day);
        this.closeCombineDaysDialog();
      });
    } else {
      console.log('Combine cancelled');
    }
  }

  deleteDay(day: Day): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${day.name}?`);
    if (confirmDelete) {
      this.daysService.deleteDay(day).subscribe(() => {
        this.daysToShow = this.daysToShow.filter(d => d !== day);
        console.log('Day deleted', day);
        this.closeDeleteDaysDialog();
      });
    } else {
      console.log('Delete cancelled');
    }
  }

  closeDialog(): void {
    this.close.emit();
  }

  showHelp(): void {
    console.log('Help button clicked');
  }
}