import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Ingredient } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('shoppingListAnimation', [
      state('visible', style({ opacity: 1, maxHeight: '1000px' })),
      state('hidden', style({ opacity: 0, maxHeight: 0, overflow: 'hidden' })),
      transition('visible => hidden', animate('300ms ease-in-out')),
      transition('hidden => visible', animate('300ms ease-in-out')),
    ]),
  ],
})
export class DashboardComponent {
  shoppingListIngredients: Ingredient[] = [];
  showShoppingList = true;

  onShoppingListUpdated(ingredients: Ingredient[]) {
    ingredients.forEach(newIngredient => {
      const existingIngredientIndex = this.shoppingListIngredients.findIndex(
        existingIngredient => existingIngredient.name === newIngredient.name
      );
  
      if (existingIngredientIndex !== -1) {
        // Ingredient already exists, update the amount
        this.shoppingListIngredients[existingIngredientIndex].amountValue += newIngredient.amountValue;
      } else {
        // Ingredient doesn't exist, add it to the list
        this.shoppingListIngredients.push(newIngredient);
      }
    });
  }
  
  toggleShoppingList() {
    this.showShoppingList = !this.showShoppingList;
  }



}
