import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Relations } from '../models/relations.model';


@Injectable({
  providedIn: 'root'
})
export class RelationsService {

  private relations = new BehaviorSubject<Relations>(new Relations());

  relations$ = this.relations.asObservable();

  constructor() { }

  getRelations(): Observable<Relations> {
    return this.relations$;
  }

  updateSubjects(subjects: string[]): void {
    const currentRelations = this.relations.value;
    this.relations.next({ ...currentRelations, subjects });
  }

  updateClasses(classes: string[]): void {
    const currentRelations = this.relations.value;
    this.relations.next({ ...currentRelations, classes });
  }

  updateCondition(condition: string): void {
    const currentRelations = this.relations.value;
    this.relations.next({ ...currentRelations, condition });
  }

  updateConditionOrder(conditionOrder: string): void {
    const currentRelations = this.relations.value;
    this.relations.next({ ...currentRelations, conditionOrder });
  }

  updateImportance(importance: string): void {
    const currentRelations = this.relations.value;
    this.relations.next({ ...currentRelations, importance });
  }

  updateNote(note: string): void {
    const currentRelations = this.relations.value;
    this.relations.next({ ...currentRelations, note });
  }}