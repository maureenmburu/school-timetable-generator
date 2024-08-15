import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Setting } from '../models/setting.model';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private apiUrl = 'http://your-api-url.com/settings';

  constructor(private http: HttpClient) {}

  getSettings(): Observable<Setting[]> {
    return this.http.get<Setting[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  addSetting(setting: Setting): Observable<Setting> {
    return this.http.post<Setting>(this.apiUrl, setting).pipe(
      catchError(this.handleError)
    );
  }

  updateSetting(id: number, setting: Setting): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, setting).pipe(
      catchError(this.handleError)
    );
  }

  deleteSetting(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }}