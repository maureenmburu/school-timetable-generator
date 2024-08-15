import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimetableParameters } from '../../../../models/timetableparameters.model';
import { ParametersService } from '../../../../services/parameters.service';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrl: './parameter.component.css'
})
export class ParameterComponent implements OnInit {
  @Input() showDialog: boolean = false;
  @Output() dialogClosed = new EventEmitter<void>();

  parameters: TimetableParameters = new TimetableParameters(false, false, 6, false, 20, false);

  constructor(private parametersService: ParametersService) {}

  ngOnInit(): void {
    this.loadParameters();
  }

  loadParameters(): void {
    this.parametersService.getParameters().subscribe((params: TimetableParameters) => {
      this.parameters = params;
    });
  }

  onSubmit(): void {
    this.parametersService.updateParameters(this.parameters).subscribe(() => {
      console.log('Parameters saved', this.parameters);
      this.close();
    });
  }

  close(): void {
    this.dialogClosed.emit();
    this.showDialog = false;
  }}