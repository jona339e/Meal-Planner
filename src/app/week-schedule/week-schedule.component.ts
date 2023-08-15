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

  Drop(event: CdkDragDrop<Recipe[]>) {
    copyArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )
    console.log('drop', event);


    }

    getRatingStars(rating: number): number[] {
      return new Array(rating);
    }
}
