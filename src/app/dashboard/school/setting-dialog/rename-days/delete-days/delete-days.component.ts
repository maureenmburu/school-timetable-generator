import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-days',
  templateUrl: './delete-days.component.html',
  styleUrl: './delete-days.component.css'
})
export class DeleteDaysComponent {
  @Output() close = new EventEmitter<void>();

  closeDialog(): void {
    this.close.emit();
  }

}
