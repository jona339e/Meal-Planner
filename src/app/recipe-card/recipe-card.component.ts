import { Component, Input } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {

  recipes: Recipe[] = [
    {
      title: 'Delicious Pasta',
      rating: 4,
      ingredients: [
        { name: 'Pasta', amount: '200g', amountValue: 200 },
        { name: 'Tomato Sauce', amount: '1 cup', amountValue: 240 }, // Assuming 1 cup is 240g
        { name: 'Cheese', amount: '100g', amountValue: 100 }
      ]
    },
    {
      title: 'Tasty Salad',
      rating: 5,
      ingredients: [
        { name: 'Lettuce', amount: '1 head', amountValue: 1 },
        { name: 'Tomatoes', amount: '2', amountValue: 2 },
        { name: 'Cucumbers', amount: '1', amountValue: 1 },
        { name: 'Dressing', amount: '2 tbsp', amountValue: 30 } // Assuming 1 tbsp is 15g
      ]
    }
    // Add more recipes here
  ];
  

  getRatingStars(rating: number): number[] {
    return new Array(rating);
  }
}

export interface Recipe {
  title: string;
  rating: number;
  ingredients: Ingredient[]; // Array of Ingredient objects
}
export interface Ingredient {
  name: string;
  amount: string;
  amountValue: number;
}
