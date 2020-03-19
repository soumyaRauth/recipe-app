import { Component } from '@angular/core';
import { Ingredients } from '../shared/shopping.model';

@Component({
    selector:'app-shopping-list',
    templateUrl:'./shopping-list.component.html',
    styleUrls:['./shopping-list.component.scss']
})
export class ShoppingListComponent{
ingredients:Ingredients[]=[
    new Ingredients("apple",5),
    new Ingredients("Tomato",10)
]
}