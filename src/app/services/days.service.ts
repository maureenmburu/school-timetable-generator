import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Day } from '../models/day.model';

@Injectable({
  providedIn: 'root'
})
export class DaysService {

  private apiUrl = 'https://your-backend-api-url.com/api/days'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  getDays(): Observable<Day[]> {
    return this.http.get<Day[]>(this.apiUrl);
  }

  updateDay(updatedDay: Day): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${updatedDay.name}`, updatedDay);
  }

  combineDays(combinedDays: Day[]): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/combine`, combinedDays);
  }

  deleteDay(day: Day): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${day.name}`);
  }}