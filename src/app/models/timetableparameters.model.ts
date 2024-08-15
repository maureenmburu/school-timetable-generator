// src/app/models/timetable-parameters.model.ts
export class TimetableParameters {
    generateDifferentTimetables: boolean;
    checkExhaustion: boolean;
    maxExhaustion: number;
    checkWindowsOfTeachers: boolean;
    maxWindows: number;
    allowZeroPeriod: boolean;
  
    constructor(
      generateDifferentTimetables: boolean,
      checkExhaustion: boolean,
      maxExhaustion: number,
      checkWindowsOfTeachers: boolean,
      maxWindows: number,
      allowZeroPeriod: boolean
    ) {
      this.generateDifferentTimetables = generateDifferentTimetables;
      this.checkExhaustion = checkExhaustion;
      this.maxExhaustion = maxExhaustion;
      this.checkWindowsOfTeachers = checkWindowsOfTeachers;
      this.maxWindows = maxWindows;
      this.allowZeroPeriod = allowZeroPeriod;
    }
  }
  