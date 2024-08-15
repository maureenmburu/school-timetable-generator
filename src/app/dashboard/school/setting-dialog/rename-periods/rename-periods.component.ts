import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PeriodService } from '../../../../services/period.service';
import { Period } from '../../../../models/period.model';

@Component({
  selector: 'app-rename-periods',
  templateUrl: './rename-periods.component.html',
  styleUrl: './rename-periods.component.css'
})
export class RenamePeriodsComponent implements OnInit {
  @Input() showDialog: boolean = false;
  @Input() periods: Period[] = []; // Accept periods as input
  @Output() dialogClosed = new EventEmitter<void>();

  differentBellTimes: boolean = false;
  differentBells: boolean = false;
  showBreakDialog: boolean = false; // Control subdialog visibility

  constructor(private periodService: PeriodService) { }

  ngOnInit(): void {
    // Initialization code if needed
  }

  close(): void {
    this.showDialog = false;
    this.dialogClosed.emit();
  }

  edit(period: Period): void {
    this.periodService.updatePeriod(period).subscribe(
      () => {
        this.loadPeriods();  // Reload periods after editing
      },
      error => {
        console.error('Error updating period', error);
      }
    );
  }

  delete(periodId: number): void {
    this.periodService.deletePeriod(periodId).subscribe(
      () => {
        this.loadPeriods();  // Reload periods after deleting
      },
      error => {
        console.error('Error deleting period', error);
      }
    );
  }

  addBreak(): void {
    this.showBreakDialog = true; // Open the subdialog
  }

  handleBreakSave(newBreak: any): void {
    // Add the new break details to periods or handle accordingly
    const breakPeriod: Period = {
      id: this.periods.length + 1, // Generate a new ID for the break
      name: newBreak.name,
      short: newBreak.short,
      start: newBreak.start,
      end: newBreak.end,
      length: this.calculateLength(newBreak.start, newBreak.end),
      print: newBreak.printoutText,
      bell: newBreak.printInBells
    };
    this.periods.splice(newBreak.position, 0, breakPeriod); // Insert the break at the specified position
  }

  closeBreakDialog(): void {
    this.showBreakDialog = false; // Close the subdialog
  }

  private loadPeriods(): void {
    // If periods are not provided as input, load them from the service
    if (!this.periods || this.periods.length === 0) {
      this.periodService.getPeriods().subscribe(
        data => {
          this.periods = data; // Load periods if not passed in
        },
        error => {
          console.error('Error loading periods', error);
        }
      );
    }
  }

  private calculateLength(start: string, end: string): number {
    // Implement logic to calculate the length of the period
    const startTime = new Date(`1970-01-01T${start}:00`);
    const endTime = new Date(`1970-01-01T${end}:00`);
    return (endTime.getTime() - startTime.getTime()) / 6000; // Length in minutes
  }}