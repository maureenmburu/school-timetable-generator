import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimetableParameters } from '../models/timetableparameters.model';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  private apiUrl = 'https://your-backend-api-url.com/api/parameters'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  getParameters(): Observable<TimetableParameters> {
    return this.http.get<TimetableParameters>(this.apiUrl);
  }

  updateParameters(parameters: TimetableParameters): Observable<void> {
    return this.http.put<void>(this.apiUrl, parameters);
  }
}

