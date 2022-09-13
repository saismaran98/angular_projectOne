import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipies: Recipe[];
      getRecipe(): Recipe[]{
        //.slise() will return a copy of the array not the main ref. 
       return this.recipies.slice();

      }
}