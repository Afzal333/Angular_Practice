import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://cdn.pixabay.com/photo/2017/10/13/19/00/potato-casserole-2848605_960_720.jpg'),
    new Recipe('Another Test Recipe','My Favorite Dish','https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg')
  ];
   constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
