import { Component } from '@angular/core';

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

interface Recipe {
  title: string;
  rating: number;
}
