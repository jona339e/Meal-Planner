import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    { title: 'Delicious Pasta', rating: 4 },
    { title: 'Tasty Salad', rating: 5 }
    // Add more recipes here
  ];

  getRecipes(): Recipe[] {
    return this.recipes;
  }
}

interface Recipe {
  title: string;
  rating: number;
}
