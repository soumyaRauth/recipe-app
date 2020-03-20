import { Component } from '@angular/core';
import { Ingredients } from '../shared/shopping.model';

@Component({
    selector:'app-shopping-list',
    templateUrl:'./shopping-list.component.html',
    styleUrls:['./shopping-list.component.scss']
})
export class ShoppingListComponent{
ingredients:Ingredients[]=[]


getNewIngredients(event:Ingredients){
    this.ingredients.push(event);
}
}