import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './../recipe.model';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  public addToShoppingList: Function = () => {
    this.sls.addIngredients(this.recipe.ingredients);
  }

}
