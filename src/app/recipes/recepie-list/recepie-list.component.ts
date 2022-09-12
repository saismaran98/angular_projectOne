import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipies: Recipe[];
  constructor(private recipeService: RecipeService) { 

  }

  ngOnInit(){
    this.recipies=this.recipeService.getRecipe();
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
