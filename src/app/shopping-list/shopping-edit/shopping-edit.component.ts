import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  public onAdd: Function = () => {
    this.sls.addIngredient(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value * 1));
  }
}

