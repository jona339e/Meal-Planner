import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; // Import required modules
import { Ingredient, Recipe } from '../Interfaces';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {
  recipeModel: Recipe = {
    id: 0,
    title: '',
    category: '',
    description: '',
    preparationTime: '',
    cookingTime: '',
    servings: 0,
    rating: 0,
    ingredients: [],
    instructions: [],
    deleted: false,
  };

  categories: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snacks'];
  selectedCategory: string = '';

  instructionArr: any[] = [];

  ingredientArr: any[] = [];

  ingredientInputValues: any[] = [[]];
  instructionInputValue: string = '';

  ingredientModel: Ingredient = {
    name: '',
    amount: {
      value: 0,
      unit: '',
    },
  };

  onSubmit() {


    this.recipeModel.ingredients = this.ingredientInputValues.map(row => {
      const ingredient: Ingredient = {
        name: row[0],
        amount: {
          value: row[1][0],
          unit: row[1][1],
        },
      };
      return ingredient;
    });

    this.recipeModel.instructions = this.instructionArr.map(row => {
      return row[0];
    });

    console.log(this.recipeModel);
  }

  ngOnInit() {
    this.addIngredientRow();
    this.addInstructionRow();
  }



  addIngredientRow() {
    this.ingredientInputValues.push(['', [0, '']]);
  }

  deleteIngredientRow() {
    if (this.ingredientArr.length > 1) {
      this.ingredientArr.pop();
    }
  }

  addInstructionRow() {
    this.instructionArr.push(['']);
  }

  deleteInstructionRow() {
    if (this.instructionArr.length > 1) {
      this.instructionArr.pop();
    }
  }

}
