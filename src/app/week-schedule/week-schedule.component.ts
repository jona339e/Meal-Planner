import { Component, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Recipe, Ingredient } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-week-schedule',
  templateUrl: './week-schedule.component.html',
  styleUrls: ['./week-schedule.component.css'],
})
export class WeekScheduleComponent {
  shoppingListIngredients: Ingredient[] = [];
  @Output() shoppingListUpdated = new EventEmitter<Ingredient[]>();

  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  timeSlots = ['Breakfast', 'Lunch', 'Dinner'];
  recipes: Recipe[] = [];
  cellContents: Recipe[][] = Array.from({ length: this.timeSlots.length }, () =>
    Array(this.days.length).fill(null)
  );


  Drop(event: CdkDragDrop<Recipe[]>, rowIndex: number, colIndex: number): void {
    if (event.previousContainer === event.container) {
      return;
    }

    const recipe = event.item.data;
    const newRecipe: Recipe = { ...recipe, ingredients: [...recipe.ingredients] };

    this.cellContents[colIndex][rowIndex] = newRecipe;
    this.cellContents[colIndex][rowIndex].deleted = false; // Reset the deleted property
    this.shoppingListUpdated.emit(newRecipe.ingredients);
  }

  getRatingStars(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  
    return new Array(fullStars + halfStar);
  }


  deleteRecipe(rowIndex: number, colIndex: number): void {
    const deletedRecipe = this.cellContents[colIndex][rowIndex];
    if (deletedRecipe) {
      this.shoppingListIngredients = this.shoppingListIngredients.filter(ingredient =>
        !deletedRecipe.ingredients.find(ing => ing.name === ingredient.name)
      );
      deletedRecipe.deleted = true; // Set deleted property to true
      this.shoppingListUpdated.emit(deletedRecipe.ingredients.map(ing => ({
        ...ing,
        amountValue: -ing.amountValue  // Negate the amountValue for subtraction
      })));
    }
  }
  

  
}
