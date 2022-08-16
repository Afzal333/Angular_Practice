import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService{

  recipesChanged = new Subject<Recipe[]>();

  // recipeSelected = new EventEmitter<Recipe>();

  
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
        'This is simply a test',
        'https://cdn.pixabay.com/photo/2017/10/13/19/00/potato-casserole-2848605_960_720.jpg',
        [
          new Ingredient('Meat',1),
          new Ingredient('French Fries',20)
        ]),
        new Recipe('Big Fat Burger',
        'My Favorite Dish',
        'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg',
        [
          new Ingredient('Buns',2),
          new Ingredient('Meat',1)
        ])
      ];

      constructor(private slService: ShoppingListService){

      }

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes.slice()[index];
      }

      addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      } 

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }
}