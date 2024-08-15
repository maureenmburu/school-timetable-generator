import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-combine-days',
  templateUrl: './combine-days.component.html',
  styleUrl: './combine-days.component.css'
})
export class CombineDaysComponent {
  @Output() close = new EventEmitter<void>();

  closeDialog(): void {
    this.close.emit();
  }

}
