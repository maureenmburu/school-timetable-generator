import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomFields3 } from '../models/custom-fields3.model';

@Injectable({
  providedIn: 'root'
})
export class CustomFields3Service {
  private apiUrl = 'http://example.com/api/custom-fields'; // Replace with actual API endpoint

  constructor(private http: HttpClient) {}

  getCustomFields(): Observable<CustomFields3[]> {
    return this.http.get<CustomFields3[]>(this.apiUrl);
  }

  addCustomField(customField: CustomFields3): Observable<CustomFields3> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<CustomFields3>(this.apiUrl, customField, { headers });
  }

  updateCustomField(customField: CustomFields3): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<void>(`${this.apiUrl}/${customField.name}`, customField, { headers });
  }

  deleteCustomField(name: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${name}`);
  }
}
