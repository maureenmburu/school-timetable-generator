export class Classroom {
    id: number;
    name: string;
    short: string;
    count: number;
    timeOff: string;
    type: string;
  
    constructor(id: number, name: string, short: string, count: number, timeOff: string, type: string) {
      this.id = id;
      this.name = name;
      this.short = short;
      this.count = count;
      this.timeOff = timeOff;
      this.type = type;
    }
  }
  