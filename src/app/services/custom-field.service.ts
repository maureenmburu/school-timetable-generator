import { Injectable } from '@angular/core';
import { CustomField } from '../models/custom-field.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomFieldService {

  private apiUrl = 'http://your-api-url.com/custom-fields'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  // Get all custom fields
  getCustomFields(): Observable<CustomField[]> {
    return this.http.get<CustomField[]>(this.apiUrl);
  }

  // Add a new custom field
  addCustomField(field: CustomField): Observable<CustomField> {
    return this.http.post<CustomField>(this.apiUrl, field);
  }

  // Update an existing custom field
  updateCustomField(id: string, field: CustomField): Observable<CustomField> {
    return this.http.put<CustomField>(`${this.apiUrl}/${id}`, field);
  }

  // Delete a custom field
  deleteCustomField(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

