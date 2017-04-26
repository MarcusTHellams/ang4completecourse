import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './../../recipe.model';
import { RecipeService } from './../../recipe.service';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('item') recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  public onSelected: Function = () => {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
