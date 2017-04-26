import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'A super tasty schnitzel - just awesome!', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger', 'What else do you need to say?', 'http://i.huffpost.com/gen/1034181/images/o-FATBURGER-INTERNATIONAL-LOCATIONS-facebook.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 4),
      ])
  ];

  constructor() { }

  public getRecipes: Function = () => {
    return this.recipes.slice();
  }

}
