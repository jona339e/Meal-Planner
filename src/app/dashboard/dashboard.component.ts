import { Component } from '@angular/core';
import { Ingredient } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  shoppingListIngredients: Ingredient[] = [];

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
}
