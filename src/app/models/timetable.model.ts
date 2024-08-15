export class Timetable {
  id: number;
  subject: string;
  teacher: string;
  time: string;
  period: string;
  className: string;  // Renamed from 'class'
  classroom: string;

  constructor(
    id: number,
    subject: string,
    teacher: string,
    time: string,
    period: string,
    className: string,
    classroom: string
  ) {
    this.id = id;
    this.subject = subject;
    this.teacher = teacher;
    this.time = time;
    this.period = period;
    this.className = className;  // Renamed from 'class'
    this.classroom = classroom;
  }

  // Add any additional methods if needed
}
