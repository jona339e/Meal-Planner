import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | null = null;

  recipes: Recipe[] = [
    {
      title: 'Delicious Pasta',
      rating: 4,
      ingredients: [
        { name: 'Pasta', amount: '200g', amountValue: 200 },
        { name: 'Tomato Sauce', amount: '1 cup', amountValue: 240 }, // Assuming 1 cup is 240g
        { name: 'Cheese', amount: '100g', amountValue: 100 }
      ],
      deleted: false
    },
    {
      title: 'Tasty Salad',
      rating: 5,
      ingredients: [
        { name: 'Lettuce', amount: '1 head', amountValue: 1 },
        { name: 'Tomatoes', amount: '2', amountValue: 2 },
        { name: 'Cucumbers', amount: '1', amountValue: 1 },
        { name: 'Dressing', amount: '2 tbsp', amountValue: 30 } // Assuming 1 tbsp is 15g
      ],
      deleted: false
    },
    // Add more recipes here
{
  title: 'Classic Margherita Pizza',
  rating: 4.5,
  ingredients: [
    { name: 'Pizza Dough', amount: '1 ball', amountValue: 1 },
    { name: 'Tomato Sauce', amount: '1/2 cup', amountValue: 120 },
    { name: 'Fresh Mozzarella', amount: '150g', amountValue: 150 },
    { name: 'Fresh Basil Leaves', amount: 'A handful', amountValue: 1 },
  ],
  deleted: false,
},
{
  title: 'Creamy Chicken Alfredo',
  rating: 4.2,
  ingredients: [
    { name: 'Chicken Breast', amount: '2 pieces', amountValue: 2 },
    { name: 'Fettuccine Pasta', amount: '200g', amountValue: 200 },
    { name: 'Heavy Cream', amount: '1 cup', amountValue: 240 },
    { name: 'Parmesan Cheese', amount: '1/2 cup', amountValue: 120 },
  ],
  deleted: false,
},
{
  title: 'Fresh Fruit Smoothie',
  rating: 4.8,
  ingredients: [
    { name: 'Banana', amount: '1', amountValue: 1 },
    { name: 'Strawberries', amount: '1 cup', amountValue: 240 },
    { name: 'Blueberries', amount: '1/2 cup', amountValue: 120 },
    { name: 'Greek Yogurt', amount: '1/2 cup', amountValue: 120 },
    { name: 'Orange Juice', amount: '1/2 cup', amountValue: 120 },
  ],
  deleted: false,
},
{
  title: 'Spaghetti Bolognese',
  rating: 4.6,
  ingredients: [
    { name: 'Ground Beef', amount: '300g', amountValue: 300 },
    { name: 'Spaghetti', amount: '200g', amountValue: 200 },
    { name: 'Tomato Sauce', amount: '1 cup', amountValue: 240 },
    { name: 'Onion', amount: '1', amountValue: 1 },
    { name: 'Garlic', amount: '2 cloves', amountValue: 2 },
  ],
  deleted: false,
},
{
  title: 'Vegetable Stir-Fry',
  rating: 4.3,
  ingredients: [
    { name: 'Mixed Vegetables', amount: '2 cups', amountValue: 480 },
    { name: 'Tofu', amount: '200g', amountValue: 200 },
    { name: 'Soy Sauce', amount: '2 tbsp', amountValue: 30 },
    { name: 'Sesame Oil', amount: '1 tbsp', amountValue: 15 },
    { name: 'Ginger', amount: '1 tsp', amountValue: 5 },
  ],
  deleted: false,
},
{
  title: 'Chocolate Chip Cookies',
  rating: 4.7,
  ingredients: [
    { name: 'All-Purpose Flour', amount: '2 cups', amountValue: 480 },
    { name: 'Butter', amount: '1 cup', amountValue: 240 },
    { name: 'Brown Sugar', amount: '1 cup', amountValue: 240 },
    { name: 'Chocolate Chips', amount: '1 cup', amountValue: 240 },
    { name: 'Vanilla Extract', amount: '1 tsp', amountValue: 5 },
  ],
  deleted: false,
},
{
  title: 'Chicken Caesar Salad',
  rating: 4.4,
  ingredients: [
    { name: 'Romaine Lettuce', amount: '1 head', amountValue: 1 },
    { name: 'Grilled Chicken', amount: '2 pieces', amountValue: 2 },
    { name: 'Croutons', amount: '1/2 cup', amountValue: 120 },
    { name: 'Parmesan Cheese', amount: '1/4 cup', amountValue: 60 },
    { name: 'Caesar Dressing', amount: '1/4 cup', amountValue: 60 },
  ],
  deleted: false,
},
{
  title: 'Homemade Beef Burger',
  rating: 4.6,
  ingredients: [
    { name: 'Ground Beef', amount: '300g', amountValue: 300 },
    { name: 'Burger Buns', amount: '4', amountValue: 4 },
    { name: 'Lettuce', amount: '4 leaves', amountValue: 4 },
    { name: 'Tomato', amount: '1', amountValue: 1 },
    { name: 'Cheddar Cheese', amount: '4 slices', amountValue: 4 },
  ],
  deleted: false,
},
{
  title: 'Vegetable Curry',
  rating: 4.3,
  ingredients: [
    { name: 'Mixed Vegetables', amount: '2 cups', amountValue: 480 },
    { name: 'Coconut Milk', amount: '1 can', amountValue: 400 },
    { name: 'Curry Paste', amount: '2 tbsp', amountValue: 30 },
    { name: 'Onion', amount: '1', amountValue: 1 },
    { name: 'Garlic', amount: '2 cloves', amountValue: 2 },
  ],
  deleted: false,
},
{
  title: 'Mushroom Risotto',
  rating: 4.7,
  ingredients: [
    { name: 'Arborio Rice', amount: '1 cup', amountValue: 240 },
    { name: 'Mushrooms', amount: '200g', amountValue: 200 },
    { name: 'White Wine', amount: '1/2 cup', amountValue: 120 },
    { name: 'Vegetable Broth', amount: '4 cups', amountValue: 960 },
    { name: 'Parmesan Cheese', amount: '1/2 cup', amountValue: 120 },
  ],
  deleted: false,
},

];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    // Assuming recipes is an array containing all recipes
    this.recipe = this.recipes.find(recipe => recipe.title === title) || null;
  }


  getRatingStars(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  
    return new Array(fullStars + halfStar);
  }
  
}
