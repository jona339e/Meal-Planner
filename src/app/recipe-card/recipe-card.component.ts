import { Component, Input } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {

  recipes: Recipe[] = [
    { title: 'Delicious Pasta', rating: 4 },
    { title: 'Tasty Salad', rating: 5 }
    // Add more recipes here
  ];

  getRatingStars(rating: number): number[] {
    return new Array(rating);
  }
}

export interface Recipe {
  title: string;
  rating: number;
}
