export class Subject {
  id?: number;
  title!: string;
  short!: string;
  count!: number;
  timeOff!: string;
  distribution!: string;
  homeworkPreparationRequired!: string;
  maxOnTheQuestionMarked!: string;
  doubleLessons!: string;
  classrooms?: string;

  constructor(init?: Partial<Subject>) {
    Object.assign(this, init);
  }
}
