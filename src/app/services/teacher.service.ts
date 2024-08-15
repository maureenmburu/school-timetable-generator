import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher.model';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private apiUrl = 'https://your-backend-url/api/teachers'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrl).pipe(
      catchError(this.handleError<Teacher[]>('getTeachers', []))
    );
  }

  addTeacher(teacher: Teacher): Observable<Teacher> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Teacher>(this.apiUrl, teacher, { headers }).pipe(
      catchError(this.handleError<Teacher>('addTeacher'))
    );
  }

  updateTeacher(teacher: Teacher): Observable<void> {
    const url = `${this.apiUrl}/${teacher.id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<void>(url, teacher, { headers }).pipe(
      catchError(this.handleError<void>('updateTeacher'))
    );
  }

  deleteTeacher(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(this.handleError<void>('deleteTeacher'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }}