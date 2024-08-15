import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Period } from '../models/period.model';


@Injectable({
  providedIn: 'root'
})
export class PeriodService {
  private apiUrl = 'https://your-api-url.com/api/periods';  // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getPeriods(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updatePeriod(period: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${period.id}`, period);
  }

  deletePeriod(periodId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${periodId}`);
  }

  addBreak(breakData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addBreak`, breakData);
  }}