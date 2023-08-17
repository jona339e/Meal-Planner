import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './Interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService{

  constructor(private http: HttpClient) {}


  url: string = 'assets/Recipes.json';


  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url);
  }


}
