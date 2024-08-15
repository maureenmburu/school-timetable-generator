export class Day {
    name: string;
    short: string;
    description: string;
    combinedWith?: string[]; // Optional property for combined days
  
    constructor(name: string, short: string, description: string, combinedWith?: string[]) {
      this.name = name;
      this.short = short;
      this.description = description;
      this.combinedWith = combinedWith || [];
    }
  }
  