// src/app/models/activity.model.ts
export class Activity {
    id: number;
    name: string;
    date: string;
    description: string;
  
    constructor(id: number, name: string, date: string, description: string) {
      this.id = id;
      this.name = name;
      this.date = date;
      this.description = description;
    }
  }
  