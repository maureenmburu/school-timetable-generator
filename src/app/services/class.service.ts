import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Class } from '../models/class.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private apiUrl = 'http://your-api-url.com/api/classes'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.apiUrl);
  }

  getClass(id: number): Observable<Class> {
    return this.http.get<Class>(`${this.apiUrl}/${id}`);
  }

  createClass(classData: Class): Observable<Class> {
    return this.http.post<Class>(this.apiUrl, classData);
  }

  updateClass(id: number, classData: Class): Observable<Class> {
    return this.http.put<Class>(`${this.apiUrl}/${id}`, classData);
  }

  deleteClass(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
