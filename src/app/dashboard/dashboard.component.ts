import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Ingredient } from '../Interfaces';
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
        // Subtract the ingredient amount from shopping list
        this.shoppingListIngredients[existingIngredientIndex].amount.value += newIngredient.amount.value;
      } else {
        // Create a new instance of the ingredient and add it to the list
        const shoppingListIngredient: Ingredient = {
          name: newIngredient.name,
          amount: { ...newIngredient.amount, value: newIngredient.amount.value },
        };
        this.shoppingListIngredients.push(shoppingListIngredient);
      }
    });
  
    // Remove ingredients with 0 amount
    this.shoppingListIngredients = this.shoppingListIngredients.filter(ingredient => ingredient.amount.value > 0);
  }
  
  
  
  
  
  
  toggleShoppingList() {
    this.showShoppingList = !this.showShoppingList;
  }



}
