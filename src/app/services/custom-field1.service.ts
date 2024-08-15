import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomField } from '../models/custom-field.model';
import { CustomField1 } from '../models/custom-field1.model';

@Injectable({
  providedIn: 'root'
})
export class CustomField1Service {
  private apiUrl = 'http://your-backend-api-url/custom-fields'; // Replace with your API URL
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCustomFields(): Observable<CustomField1[]> {
    return this.http.get<CustomField1[]>(this.apiUrl);
  }

  addCustomField(field: CustomField1): Observable<CustomField1> {
    return this.http.post<CustomField1>(this.apiUrl, field, this.httpOptions);
  }

  updateCustomField(id: number, field: CustomField1): Observable<CustomField1> {
    return this.http.put<CustomField1>(`${this.apiUrl}/${id}`, field, this.httpOptions);
  }

  removeCustomField(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }}
