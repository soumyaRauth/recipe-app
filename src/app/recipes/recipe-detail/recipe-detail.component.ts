import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector:'app-recipe-detail',
    templateUrl:'./recipe-detail.component.html',
    styleUrls:['./recipe-detail.component.scss']
})
export class RecipeDetailComponent{
@Input() detailItem:Recipe;


ngDoCheck(){
    console.log("Item in detail")
    console.log(this.detailItem)
}
}