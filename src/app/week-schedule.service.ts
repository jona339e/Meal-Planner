import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe, Ingredient } from './Interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeekScheduleService {

  private dataUrl = '/assets/recipes-data.json'; // Adjust the path if needed

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

  updateData(updatedData: any): Observable<any> {
    return this.http.put(this.dataUrl, updatedData);
  }
}
