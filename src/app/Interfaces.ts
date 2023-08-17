export interface Recipe {
    id: number;
    title: string;
    category: string;
    description: string;
    preparationTime: string;
    cookingTime: string;
    servings: number;
    rating: number;
    ingredients: Ingredient[];
    instructions: string[];
    deleted: boolean;
  }
  
  export interface Ingredient {
    name: string;
    amount: Amount;
  }
  
  export type Amount = {
    value: number;
    unit: string;
  };
  