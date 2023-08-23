import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-forms-test',
  templateUrl: './forms-test.component.html',
  styleUrls: ['./forms-test.component.css']
})
export class FormsTestComponent {
  form: FormGroup;
  categories: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snacks'];

  constructor(private formBuilder: FormBuilder) {
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
    console.log('test');
    if (this.form.valid) {
      const formattedRecipe = {
        title: this.form.get('title')?.value || '',
        category: this.form.get('category')?.value || '',
        description: this.form.get('description')?.value || '',
        prepTime: this.form.get('prepTime')?.value || 0,
        cookTime: this.form.get('cookTime')?.value || 0,
        servings: this.form.get('servings')?.value || 0,
        rating: this.form.get('rating')?.value || 0,
        ingredients: this.ingredients.controls.map(control => control.value),
        instructions: this.instructions.controls.map(control => control.get('text')?.value || '')
      };
      console.log(formattedRecipe);
    } else {
      console.log('Form is invalid');
    }
  }
  
  
  
}
