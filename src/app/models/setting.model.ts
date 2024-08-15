export class Setting {
  id?: number;
  schoolName!: string;              // Name of the school
  academicYear!: string;            // Academic year
  registrationName!: string;        // Registration name
  periodsPerDay!: number;           // Periods per day
  zeroPeriods!: boolean;            // Zero Periods
  allowZeroPeriodLessons!: boolean; // Allow Zero Period Lessons
  numberOfDays!: number;            // Number of days
  weekend!: string;                 // Weekend
  multiTerm!: boolean;              // Multi-term

  constructor(init?: Partial<Setting>) {
    Object.assign(this, init);
  }
}
