import { Component, ViewChild, ElementRef, Output,EventEmitter } from '@angular/core';
import { Ingredients } from 'src/app/shared/shopping.model';


@Component({
    selector:'app-shopping-list-edit',
    templateUrl:'./shopping-list-edit.component.html',
    styleUrls:['./shopping-list-edit.component.scss']
})

export class ShoppingListEditComponent{
@ViewChild('nameInput') nameInput:ElementRef; 
@ViewChild('amountInput') amountInput:ElementRef;
@Output() ingredientsEmit=new EventEmitter<Ingredients>()


addIngredients(){
    
    const ingredientName=this.nameInput.nativeElement.value
    const ingredientAmount=this.amountInput.nativeElement.value
    const ingredientObject=new Ingredients(ingredientName,ingredientAmount);
    this.ingredientsEmit.emit(ingredientObject)   
}

}