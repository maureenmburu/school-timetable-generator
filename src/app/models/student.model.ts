// src/app/models/student.model.ts
export class Student { 
    id!: number;
    name!: string;
    className!: string;
    rollNumber!: string;
  
    constructor(id: number, name: string, className: string, rollNumber: string) {
      this.id = id;
      this.name = name;
      this.className = className;
      this.rollNumber = rollNumber;
    }
  }
  