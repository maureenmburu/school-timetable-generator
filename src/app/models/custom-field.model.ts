export class CustomField {
    id!: string;
    name: string;
    value: string;
  
    constructor(name: string, value: string) {
      this.name = name;
      this.value = value;
    }
  }
  