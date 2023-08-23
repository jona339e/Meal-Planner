import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule  } from '@angular/forms';
import { CreateRecipeService } from '../create-recipe.service';
import { Recipe } from '../Interfaces';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent {
  form: FormGroup;
  categories: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snacks'];

  constructor(private formBuilder: FormBuilder,
    private createRecipeService: CreateRecipeService 
    ) {
    this.form = this.formBuilder.group({
      title: '',
      category: '',
      description: '',
      prepTime: '',
      cookTime: '',
      servings: '',
      rating: '',
      ingredients: this.formBuilder.array([]),
      instructions: this.formBuilder.array([])
    });

    this.addIngredients();
    this.addInstruction();
  }

  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredients() {
    this.ingredients.push(this.createIngredientFormGroup());
  }

  removeIngredients() {
    if (this.ingredients.length > 0) {
      this.ingredients.removeAt(this.ingredients.length - 1);
    }
  }

  createIngredientFormGroup() {
    return new FormGroup({
      name: new FormControl(''),
      amount: new FormControl(''),
      unit: new FormControl('')
    });
  }

  get instructions(): FormArray {
    return this.form.get('instructions') as FormArray;
  }

  addInstruction() {
    this.instructions.push(this.createInstructionFormGroup());
  }

  removeLastInstruction() {
    if (this.instructions.length > 0) {
      this.instructions.removeAt(this.instructions.length - 1);
    }
  }

  createInstructionFormGroup() {
    return new FormGroup({
      text: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.form.value)
    if (this.form.valid) {
      const formattedRecipe: Recipe = {
        id: 0,
        title: this.form.get('title')?.value,
        category: this.form.get('category')?.value ,
        description: this.form.get('description')?.value ,
        preparationTime: this.form.get('prepTime')?.value,
        cookingTime: this.form.get('cookTime')?.value,
        servings: this.form.get('servings')?.value,
        rating: this.form.get('rating')?.value,
        ingredients: this.ingredients.controls.map(control => control.value),
        instructions: this.instructions.controls.map(control => control.get('text')?.value),
        deleted: false
      };
      this.createRecipeService.createRecipe(formattedRecipe).subscribe({
        next: response => {
          console.log('Recipe created successfully', response);
          this.form.reset();
        },
        error: error => console.error('There was an error!', error)
      });
    } else {
      console.log('Form is invalid');
    }
  }  
}