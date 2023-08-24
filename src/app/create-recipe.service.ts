import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CreateRecipe } from './Interfaces';

@Injectable({
  providedIn: 'root'
})
export class CreateRecipeService {

  private url = 'https://localhost:7268/api/Recipe';

  constructor(private http: HttpClient) {}

  createRecipe(recipeData: CreateRecipe): Observable<any> {
    const url = `${this.url}`; 

    // Send a POST request to the API
    return this.http.post(url, recipeData).pipe(
      catchError(error => {
        console.error('Error creating recipe:', error);
        throw error;
      })
    );
  }

}