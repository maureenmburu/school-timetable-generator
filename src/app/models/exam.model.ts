export class Exam {
  id: number;
  subject: string;
  date: string;
  startTime: string;
  endTime: string;
  classroom: string;

  constructor(id: number, subject: string, date: string, startTime: string, endTime: string, classroom: string) {
    this.id = id;
    this.subject = subject;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.classroom = classroom;
  }
}
