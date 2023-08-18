import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import required modules
import { Recipe } from '../Interfaces';


@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {

  recipeForm: FormGroup = new FormGroup({}); // Create a FormGroup to hold the form's values


  ngOnInit() {

  }
  
  
  onSubmit() {
    const formData: Recipe = this.recipeForm.value;
    console.log(JSON.stringify(formData, null, 2));
}
    
  categories: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snacks'];
  selectedCategory: string = '';

  ingredientAmount: number = 1;
  instructionAmount: number = 1;


  incrementIngredientAmount() {
    this.ingredientAmount++;
    console.log(this.ingredientAmount);
  }
  decrementIngredientAmount() {
    if (this.ingredientAmount > 1) {
      this.ingredientAmount--;
    }
  }

  incrementInstructionAmount() {
    this.instructionAmount++;
    console.log(this.instructionAmount);
  }
  decrementInstructionAmount() {
    if (this.instructionAmount > 1) {
      this.instructionAmount--;
    }
  }

  


}
