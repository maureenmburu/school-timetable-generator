import { Injectable } from '@angular/core';
import { Classroom } from '../models/classroom.model';
import { catchError, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private apiUrl = 'http://example.com/api/classrooms'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  // Get all classrooms
  getClassrooms(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Get a specific classroom by ID
  getClassroom(id: number): Observable<Classroom> {
    return this.http.get<Classroom>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Add a new classroom
  addClassroom(classroom: Classroom): Observable<Classroom> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Classroom>(this.apiUrl, classroom, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing classroom
  updateClassroom(classroom: Classroom): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<void>(`${this.apiUrl}/${classroom.id}`, classroom, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a classroom by ID
  deleteClassroom(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Error handling function
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(`Server error: ${error.message}`);
    return throwError('An error occurred while processing your request. Please try again later.');
  }}