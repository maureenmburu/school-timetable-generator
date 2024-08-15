import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeachService {


    private apiUrl = 'backend-url-to-fetch-teachers'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<{ name: string, short: string }[]> {
    return this.http.get<{ name: string, short: string }[]>(this.apiUrl);
  }
}
