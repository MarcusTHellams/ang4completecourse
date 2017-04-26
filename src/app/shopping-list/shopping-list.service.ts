import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  public getIngredients: Function = () => {
    return this.ingredients.slice();
  }

  public addIngredient: Function = (ingredient: Ingredient | Ingredient[]) => {
    if ((ingredient instanceof Ingredient)) {
      this.ingredients.push(ingredient);
    } else if ((ingredient instanceof Array)) {
      this.ingredients = this.ingredients.concat(ingredient);

    }

    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
