export class Class {
  id?: number;
  name!: string;
  short!: string;
  teacher!: string;
  grade!: string;
  timeOff!: string;
  allowSecondLesson!: boolean;
  preparation!: string;
  lunch!: string;
  maxQuestionMarked!: string;
  specificTimeEveryDay!: string;
  lessonsStartPeriod!: string;
  lessonsEndPeriod!: string;
  lessonsPerDayInterval!: string;
  daysWithLessons!: string;
  schedule!: string;  // Add the missing schedule property

  constructor(init?: Partial<Class>) {
    Object.assign(this, init);
  }
}
