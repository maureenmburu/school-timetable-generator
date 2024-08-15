// teacher.model.ts
export class Teacher {
  constructor(
    public id: number,
    public name: string,
    public short: string,
    public email: string,
    public phone: string,
    public count: number,
    public timeOff: string,
    public classTeacher: boolean,
    public Qualification: string,
    public maxWindows: number,
    public daysTaught: number,
    
    public lessonIntervals: string,
    public maxQuestionsMarked: number,
    public maxWindowsPerDay: number,
    public avoidThreeConsecutiveFreePeriods: boolean,
    public avoidTwoConsecutiveFreePeriods: boolean,
   
    public contract: string
  ) {}
}
