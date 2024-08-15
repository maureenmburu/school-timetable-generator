export class Relations {
    subjects: string[];
    classes: string[];
    condition: string;
    conditionOrder: string;
    importance: string;
    note: string;
  
    constructor(
      subjects: string[] = [],
      classes: string[] = [],
      condition: string = '',
      conditionOrder: string = '',
      importance: string = 'Normal',
      note: string = ''
    ) {
      this.subjects = subjects;
      this.classes = classes;
      this.condition = condition;
      this.conditionOrder = conditionOrder;
      this.importance = importance;
      this.note = note;
    }
  }
  