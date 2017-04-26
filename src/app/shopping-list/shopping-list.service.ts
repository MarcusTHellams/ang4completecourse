import { Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  public getIngredients: Function = () => {
    return this.ingredients.slice();
  }

  public addIngredient: Function = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient);
  }

}
