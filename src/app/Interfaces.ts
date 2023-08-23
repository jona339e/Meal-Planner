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
    instructions: Instruction[];
    deleted: boolean;
  }
  
  export interface Ingredient {
    name: string;
    amounts: Amounts;
  }
  
  export interface Amounts {
    value: number;
    unit: string;
  };

  export interface Instruction{
    id: number;
    text: string;
    recipeId: number;
  }
  