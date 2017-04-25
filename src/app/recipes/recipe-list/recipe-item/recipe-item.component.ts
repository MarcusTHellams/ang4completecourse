import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../../recipe.model';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('item') recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  public onSelected: Function = () => {
    this.recipeSelected.emit();
  }

}
