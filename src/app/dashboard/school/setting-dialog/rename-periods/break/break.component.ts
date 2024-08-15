import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-break',
  templateUrl: './break.component.html',
  styleUrl: './break.component.css'
})
export class BreakComponent implements OnInit {
  @Output() closeBreak = new EventEmitter<void>();
  @Output() saveBreakEvent = new EventEmitter<any>(); // Emit the new break details

  newBreak: any = {
    name: '',
    short: '',
    position: 0,
    start: '',
    end: '',
    printoutText: '',
    summaryTimetables: false,
    teacherTimetables: false,
    classTimetables: false,
    classroomTimetables: false,
    printInBells: 'all',
    doubleLessons: false
  };

  times: string[] = [];

  // Define which fields are applicable
  applicableFields: { [key: string]: boolean } = {
    name: true,
    short: true,
    position: true,
    startEnd: true,
    printoutText: true,
    printouts: true,
    printInBells: true,
    doubleLessons: true
  };

  constructor() {}

  ngOnInit(): void {
    this.generateTimes();
  }

  generateTimes(): void {
    const startHour = 8;
    const endHour = 18;
    const intervalMinutes = 30;

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += intervalMinutes) {
        const time = this.formatTime(hour, minute);
        this.times.push(time);
      }
    }
  }

  formatTime(hour: number, minute: number): string {
    const hourString = hour.toString().padStart(2, '0');
    const minuteString = minute.toString().padStart(2, '0');
    return `${hourString}:${minuteString}`;
  }

  saveBreak(): void {
    if (this.isFormValid()) {
      this.saveBreakEvent.emit(this.newBreak); // Emit the new break details
      this.closeBreak.emit();
    }
  }

  cancelBreak(): void {
    this.closeBreak.emit();
  }

  isFieldApplicable(field: string): boolean {
    return this.applicableFields[field];
  }

  isFormValid(): boolean {
    return !!this.newBreak.name && !!this.newBreak.short;
  }
}