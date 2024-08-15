import { Injectable } from '@angular/core';
import { CustomFields4 } from '../models/custom-fields4.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomFields4Service {

  private apiUrl = 'http://example.com/api/custom-fields'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  getCustomFields(): Observable<CustomFields4[]> {
    return this.http.get<CustomFields4[]>(this.apiUrl);
  }

  addCustomField(customField: CustomFields4): Observable<CustomFields4> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<CustomFields4>(this.apiUrl, customField, { headers });
  }

  updateCustomField(customField: CustomFields4): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<void>(`${this.apiUrl}/${customField.name}`, customField, { headers });
  }

  deleteCustomField(name: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${name}`);
  }
}
