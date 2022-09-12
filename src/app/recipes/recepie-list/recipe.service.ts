import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipies: Recipe[] =[
        new Recipe("Ice Cream", "Vanila Ice Cream","https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=1200"),
        new Recipe("Cake", "Choclate Ice Cream","https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1200")
      ];
      getRecipe(): Recipe[]{
        //.slise() will return a copy of the array not the main ref. 
       return this.recipies.slice();

      }
}