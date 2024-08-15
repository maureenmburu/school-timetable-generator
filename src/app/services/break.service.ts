import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakService {

 
  private apiUrl = 'https://api.example.com/breaks'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  addBreak(newBreak: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newBreak);
  }

  updateBreak(updatedBreak: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${updatedBreak.id}`, updatedBreak);
  }

  deleteBreak(breakId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${breakId}`);
  }

  getBreaks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
