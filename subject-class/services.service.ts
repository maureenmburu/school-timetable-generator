import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private subjectsUrl = 'http://your-backend-api/subjects';  // Replace with your backend API
  private classesUrl = 'http://your-backend-api/classes';    // Replace with your backend API

  constructor(private http: HttpClient) {}

  getSubjects(): Observable<any[]> {
    return this.http.get<any[]>(this.subjectsUrl);
  }

  getClasses(): Observable<any[]> {
    return this.http.get<any[]>(this.classesUrl);
  }
}