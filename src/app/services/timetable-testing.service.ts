import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimetableTestingService {

  private apiUrl = 'http://example.com/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  performTest(data: any): Observable<any> {
    // Perform test using backend API
    return this.http.post(`${this.apiUrl}/test-timetable`, data);
  }

  getTestResults(): Observable<any> {
    // Get test results from backend API
    return this.http.get(`${this.apiUrl}/test-results`);
  }
}
