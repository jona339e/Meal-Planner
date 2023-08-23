import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateRecipeService {

  private url = 'https://mock-api-url.com'; // Replace with your mock API URL

  constructor(private http: HttpClient) {}

  createRecipe(recipeData: any): Observable<any> {
    // You can replace 'any' with a custom interface that matches your recipe structure
    const url = `${this.url}/recipes`; // Replace 'recipes' with your API endpoint

    // Send a POST request to the API
    return this.http.post(url, recipeData).pipe(
      catchError(error => {
        console.error('Error creating recipe:', error);
        throw error;
      })
    );
  }

}