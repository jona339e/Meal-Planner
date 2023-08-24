import { Component, OnInit } from '@angular/core';
import { CreateRecipe, Recipe } from '../Interfaces';
import { RecipeServiceService } from '../recipe-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit{
  recipe: Recipe | undefined;
  recipeId: number | undefined;

  updateForm!: FormGroup;

  categories: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snacks'];
  

  constructor(
    private route: ActivatedRoute, 
    private recipeService: RecipeServiceService,
    private formBuilder: FormBuilder
    ) 
    { 
      
    }

  ngOnInit(): void {


    // fetch recipe by id
    // initialize form with recipe data inside a subscription
    
    // subscription is necessary because we need to wait 
    // for the recipe to be fetched
    
    // before we can initialize the form with the recipe data

    this.route.paramMap.pipe(map(params => Number(params.get('id'))),
      switchMap(recipeId => {
        if(!isNaN(recipeId)){
          return this.recipeService.getRecipeById(recipeId);
        }
        else return [];
      })
    ).subscribe(recipe => {
      this.recipe = recipe;

      this.updateForm = this.formBuilder.group({
        title: this.recipe?.title,
        category: this.recipe?.category,
        description: this.recipe?.description,
        preparationTime: this.recipe?.preparationTime,
        cookingTime: this.recipe?.cookingTime,
        servings: this.recipe?.servings,
        rating: this.recipe?.rating,
        ingredients: this.formBuilder.array(
          this.recipe?.ingredients.map(ingredient => ({
              name: ingredient.name,
              amounts: this.formBuilder.group({
                value: ingredient.amounts.value,
                unit: ingredient.amounts.unit
              })
            })
          )
        ),
        instructions: this.recipe?.instructions.map(instruction => ({
          text: instruction.text
        })),
        deleted: this.recipe?.deleted
      });
    
    });    

  }






  updateRecipe(): void {
    console.log('wow');

  }




logRecipe(){
  
    console.log(this.updateForm.value);
}





addIngredient(): void {
  const ingredientsArray = this.updateForm.get('ingredients') as FormArray;
  ingredientsArray.push(
    this.formBuilder.group({
      name: '',
      amounts: this.formBuilder.group({
        value: '',
        unit: ''
      })
    })
  );
}


getIngredientControls(): AbstractControl[] {
  return (this.updateForm.get('ingredients') as FormArray).controls;
}

}
