import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../Interfaces';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | null = null;

  recipes: Recipe[] = [];


  constructor(private route: ActivatedRoute, private recipeService: RecipeServiceService) {}

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }



  ngOnInit(): void {
    this.getRecipes();
    const title = this.route.snapshot.paramMap.get('title');
    

    // change this to fetch from id or title so only 1 recipe is fetched
    
    // Wait for the recipes to be fetched from the service
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
  
      // Find the recipe based on the title
      this.recipe = this.recipes.find(recipe => recipe.title === title) || null;
    });
  }


  getRatingStars(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  

    return new Array(fullStars + halfStar);
    
  }
  
}
