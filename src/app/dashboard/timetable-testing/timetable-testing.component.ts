import { Component, OnInit } from '@angular/core';
import { TimetableTestingService } from '../../services/timetable-testing.service';



@Component({
  selector: 'app-timetable-testing',
  templateUrl: './timetable-testing.component.html',
  styleUrls: ['./timetable-testing.component.css']
})
export class TimetableTestingComponent implements OnInit {
  tests: any[] = [];
  progress: number = 0;
  testingComplete: boolean = false;

  constructor(private testingService: TimetableTestingService) {}

  ngOnInit(): void {
    this.runTests();
  }

  runTests(): void {
    // Example data to be sent for testing
    const testData = {
      // Populate with necessary data
      subjects: ['Math', 'Physics', 'Chemistry']
    };

    this.testingService.performTest(testData).subscribe(
      response => {
        this.tests = response.tests; // Assuming the API returns a list of tests
        this.progress = 100;
        this.testingComplete = true;
      },
      error => {
        console.error('Error during testing:', error);
        this.testingComplete = true;
      }
    );
  }

  closeDialog(): void {
    this.testingComplete = false;
    // Additional logic to close dialog or navigate away
  }
}

