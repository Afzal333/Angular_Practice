import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f',{static:false}) slform: NgForm; 
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService ) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slform.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        })
      }
    )
  }

  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if (this.editMode){
      this.slService.updateIngredient(this.editItemIndex, newIngredient);
    } else{
    this.slService.addIngredient(newIngredient);
    }
    this.editMode=false;
    form.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClear(){
    this.slform.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
  
}
