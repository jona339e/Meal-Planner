import { Component, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Recipe, Ingredient } from '../recipe-card/recipe-card.component';


@Component({
  selector: 'app-week-schedule',
  templateUrl: './week-schedule.component.html',
  styleUrls: ['./week-schedule.component.css'],
})
export class WeekScheduleComponent {

  shoppingListIngredients: Ingredient[] = []; // Initialize shoppingListIngredients array
  
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
    this.cellContents[colIndex][rowIndex] = recipe;

    console.log(recipe.ingredients);
      this.shoppingListUpdated.emit(recipe.ingredients);


  }
  getRatingStars(rating: number): number[] {
    return new Array(rating);
  }
}
