import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

  getSubjects(): Observable<any[]> {
    return this.http.get<any[]>('API_URL_FOR_SUBJECTS');
  }

  getClasses(): Observable<any[]> {
    return this.http.get<any[]>('API_URL_FOR_CLASSES');
  }
}
