import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.css'
})
export class SimpleComponent  implements OnInit  {
  periods: number[] = [];
  days: number[] = [];
  selectedPeriod: number = 7;
  selectedDay: number = 5;

  ngOnInit() {
    this.periods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.days = [1, 2, 3, 4, 5, 6, 7];
  }

}
