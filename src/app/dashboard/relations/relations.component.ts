import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


import { ServiceService } from '../../services/service.service';
import { RelationsService } from '../../services/relations.service';
import { Relations } from '../../models/relations.model';



@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrl: './relations.component.css'
})
export class RelationsComponent implements OnInit  {
  relationsForm!: FormGroup;
  subjects: any[] = [];
  classes: any[] = [];
  selectedSubjects: any[] = [];
  selectedClasses: any[] = [];
  showSubjectsDialog = false;
  showClassesDialog = false;
  selectedCondition!: string;
  isDeactivated = false;
  importanceOptions = ['High', 'Medium', 'Low'];

  constructor(
    private fb: FormBuilder,
    private servicesService: ServiceService,
    private relationsService: RelationsService
  ) {}

  ngOnInit() {
    this.relationsForm = this.fb.group({
      importance: [''],
      note: [''],
      conditionOrder: ['']
    });

    this.fetchSubjects();
    this.fetchClasses();
  }

  fetchSubjects() {
    this.servicesService.getSubjects().subscribe((subjects: any[]) => {
      this.subjects = subjects;
    });
  }

  fetchClasses() {
    this.servicesService.getClasses().subscribe((classes: any[]) => {
      this.classes = classes;
    });
  }

  selectSubjects() {
    this.showSubjectsDialog = true;
  }

  changeClasses() {
    this.showClassesDialog = true;
  }

  setCondition(event: any) {
    this.selectedCondition = event.target.value;
  }

  toggleActivation() {
    this.isDeactivated = !this.isDeactivated;
  }

  onSubmit() {
    // Create a new Relations object
    const relation = new Relations(
      this.selectedSubjects,
      this.selectedClasses,
      this.selectedCondition,
      this.relationsForm.value.conditionOrder,
      this.relationsForm.value.importance,
      this.relationsForm.value.note
    );

    // Simulate saving the relation via service methods (if you use HTTP, replace these with actual HTTP calls)
    this.relationsService.updateSubjects(relation.subjects);
    this.relationsService.updateClasses(relation.classes);
    this.relationsService.updateCondition(relation.condition);
    this.relationsService.updateConditionOrder(relation.conditionOrder);
    this.relationsService.updateImportance(relation.importance);
    this.relationsService.updateNote(relation.note);

    console.log('Relation saved successfully:', relation);
  }

  onCancel() {
    console.log('Form cancelled');
  }

  onSubjectsDialogSave(selectedSubjects: any[]) {
    this.selectedSubjects = selectedSubjects;
    this.showSubjectsDialog = false;
  }

  onClassesDialogSave(selectedClasses: any[]) {
    this.selectedClasses = selectedClasses;
    this.showClassesDialog = false;
  }

  onDialogCancel() {
    this.showSubjectsDialog = false;
    this.showClassesDialog = false;
  }
}