import { Component } from '@angular/core';
import { CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';
import { Recipe } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-week-schedule',
  templateUrl: './week-schedule.component.html',
  styleUrls: ['./week-schedule.component.css'],
})
export class WeekScheduleComponent {
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
  }
  getRatingStars(rating: number): number[] {
    return new Array(rating);
  }
}
