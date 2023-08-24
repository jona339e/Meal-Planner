import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../Interfaces';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // recipe can either hold a recipe or null
  // initially it is set to null
  recipe: Recipe | null = null;

  // Inject ActivatedRoute and RecipeServiceService
  constructor(private route: ActivatedRoute, private recipeService: RecipeServiceService) {}


  ngOnInit(): void {
    
    // Get the id from the route
    // cast to number
    // check if it is a number
    // if it is a number, call the service to fetch recipe by id
    // set this.recipe to the recipe returned from the service
    // html then renders this.recipe

    // do nothing if the id is not a number
    // html will display error message 'no recipe found'

      this.route.paramMap.subscribe(params => {
        const recipeId = Number(params.get('id'));
        if(!isNaN(recipeId)){

            this.recipeService.getRecipeById(recipeId!).subscribe(recipe =>{
              this.recipe = recipe;
            });
        }   
    });
  }

  // This method returns an array of numbers
  // The length of the array is the number of stars to display
  // For example, if rating is 3.5, the array will be [1,1,1,0]
  // and will render 3 full stars and 1 half star
  getFullStars(rating: number): number[] {
    return new Array(Math.floor(rating));
  }
  
  hasHalfStar(rating: number): boolean {
    return rating % 1 >= 0.5;
  }
  
  
  
  
  
  
  
}
