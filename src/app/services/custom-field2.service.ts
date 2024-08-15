import { Injectable } from '@angular/core';
import { CustomField2 } from '../models/custom-field2.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomField2Service {

  private apiUrl = 'backend-url-to-manage-custom-fields';

  constructor(private http: HttpClient) { }

  getCustomFields(): Observable<CustomField2[]> {
    return this.http.get<CustomField2[]>(this.apiUrl);
  }

  addCustomField(customField: CustomField2): Observable<CustomField2> {
    return this.http.post<CustomField2>(this.apiUrl, customField);
  }

  renameCustomField(oldName: string, newName: string): Observable<CustomField2> {
    return this.http.put<CustomField2>(`${this.apiUrl}/${oldName}`, { newName });
  }

  removeCustomField(name: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${name}`);
  }
}
