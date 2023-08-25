import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateRecipe, Recipe } from './Interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService{

  constructor(private http: HttpClient) {}


  url: string = 'https://localhost:7268/api/Recipe';


  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url);
  }

  getRecipeById(id: number): Observable<Recipe> {

    return this.http.get<Recipe>(`${this.url}/${id}`);

  }

  deleteRecipe(recipeId: number): Observable<any> {

    return this.http.delete(`${this.url}/${recipeId}`);
  }

  updateRecipe(recipe: CreateRecipe, recipeId: number): Observable<any> {
    return this.http.put(`${this.url}/${recipeId}`, recipe);
  }

  
  

}
