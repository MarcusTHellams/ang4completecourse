import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() addRecipe = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  public onAdd: Function = () => {
    this.addRecipe.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value * 1));
  }
}

